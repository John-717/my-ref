import React,{useState} from 'react'

function Demo() {

    const [value,setValue] = useState('');

    const handleSubmit =(e) =>{
        setValue(e.target.value)
    }
       
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='enter something'
        Value={value}
        onChange={e => setValue(e.target.value)}/>
      </form>
      <button type='submit'>
        submit
      </button>
    </div>
  )
};

export default Demo
