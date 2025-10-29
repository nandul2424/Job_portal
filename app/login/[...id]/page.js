export default function LoginPage({params,searchParams}){

    return(
        <div>
            <p>These are paths you entered/searched for-:{params.id.join("/")}</p>
            <p>Here are the searchparameters you just entered {JSON.stringify(searchParams)}</p>
        </div> 
    )
}