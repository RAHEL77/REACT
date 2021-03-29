import React from 'react';
//useState returns an array of two entries. The first element is the initial state and the second 
//is a function which is used for updating state.
const TextLorem = (props) => {
 let [visible, setVisible] = React.useState(true);
 let str='';

 if (visible)
    str=props.str.substr(0, props.lenghtOf)
 else
    str=props.str;

    const showMore=()=>{
    setVisible(!visible)
    }
  return (
    <div>
      {str}

      <button onClick={showMore}>
        {visible ? 'Show More' : 'Show Less'}
        </button>
    </div>
  );
};


export default TextLorem;

