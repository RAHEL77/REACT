const Link=({ when , auth , title , url})=>{
    return(
        <div>
            <fieldset>
                <legend style={{background:'yellow'}}>{auth}</legend>
                <p>{title}</p>
                <a href={url} target="_blank" rel="noreferree">Link to article=&gt; </a>
                <br/>
                <p>-<small>{when}</small>-</p>
            </fieldset>
        </div>
    )
}
export default Link;