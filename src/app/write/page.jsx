"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/spinner/spinner';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '@/utils/firebase';
import dynamic from 'next/dynamic';

// Import react-quill styles
import 'react-quill/dist/quill.snow.css';

// Dynamic import of Quill to avoid SSR issues
const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const storage = getStorage(app);

const WritePage = () => {
  const router = useRouter();
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [catSlug, setCatSlug] = useState('');

  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };
  console.log(status)

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug,
      }),
    });

    console.log(res);
  };

  useEffect(()=>{
    const upload=()=>{
      const name = new Date().getTime + file.name
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMedia(downloadURL);
        });
      }
    );

        };

    file && upload();
  },[file])

  if (status === 'loading') {
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return router.push('/');
  }

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">tech</option>
        <option value="fashion">fashion</option>
        <option value="food">finance</option>
        <option value="culture">travel</option>
        <option value="travel">sports</option>
        <option value="coding">art</option>
      </select>

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.svg" width={16} height={16} alt="" />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/images.svg" width={25} height={25} alt="" className={styles.icon} />
              </label>
              <span className={styles.tooltip}>Images</span>
            </button>
            <button className={styles.addButton}>
              <Image src="/new-tab.svg" width={25} height={25} alt="" className={styles.icon} />
              <span className={styles.tooltip}>New tab</span>
            </button>
            <button className={styles.addButton}>
              <Image src="/play.svg" width={25} height={25} alt="" className={styles.icon} />
              <span className={styles.tooltip}>Video</span>
            </button>
          </div>
        )}
        <QuillNoSSRWrapper
          className={styles.textArea}
          modules={modules}
          placeholder="Compose here"
          value={value}
          onChange={setValue}
          formats={formats}
          theme="snow"
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;