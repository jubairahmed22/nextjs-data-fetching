"use client"

const ErrorPage = ({error, reset}) => {
    return (
        <div className="text-center">
            <h1 className="text-center text-4xl text-500">Something When Wrong</h1>
            <h1 className="text-center text-3xl text-red-600">{error.message}</h1>
            <button onClick={()=>reset()} className="btn btn-error">Try again</button>
        </div>
    );
};

export default ErrorPage;