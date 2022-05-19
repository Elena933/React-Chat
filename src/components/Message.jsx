


export  const Message = (props) => {
    return (
        <div className={'useUI'} >
            <div key = {props.id}>

            <div>
                {props.name }
            </div>

            <div>
                {props.author }
            </div>
        </div>
</div>
   )
}