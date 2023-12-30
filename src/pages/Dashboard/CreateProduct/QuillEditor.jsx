// import  { useEffect, useRef } from 'react';
// import 'quill/dist/quill.snow.css';
// import Quill from 'quill';
// const QuillEditor = ({ value, onChange }) => {
//   const quillRef = useRef(null);

//   useEffect(() => {
//     const quill = new Quill(quillRef.current, {
//       theme: 'snow'
//     });

//     quill.on('text-change', () => {
//       onChange && onChange(quill.root.innerHTML);
//     });

//     if (value) {
//       quill.root.innerHTML = value;
//     }
//   }, [value, onChange]);

//   return <div ref={quillRef} />;
// };

// export default QuillEditor;



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

const QuillEditor = ({ value, onChange }) => (
  <ReactQuill 
    value={value}
    onChange={onChange}
    modules={modules}
    formats={formats}
    className="h-64" // Example height styling
  />
);

export default QuillEditor;
