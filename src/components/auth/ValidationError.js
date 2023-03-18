export default function ValidationErrorMessage({error}) {
    if(!error){
        return null
    }
    return (
        <div className="invalid-feedback d-block text-center"><strong><p>{ error.message }</p></strong></div>
    )
}