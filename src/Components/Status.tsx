type StatusProps = {
    status: string
}



export const Status = (props: StatusProps) =>{
    let message;

    if (props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status === 'sucess'){
        message = 'Data Fetched Successfully!'
    } else if (props.status === 'error'){
        message = 'Error fetching data'
    }



    return(
        <>
        <h2>Status: {message}</h2>

        </>
    )
}