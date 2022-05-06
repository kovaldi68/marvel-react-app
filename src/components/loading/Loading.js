export function Loading() {
    return (
        <div className='page-content__loading loading'>
            <div className='loading__spinner'>
                <img className='loading__image' src="content/img/spinner.gif" alt="spinner" width='100' height='100'/>
            </div>
            Loading...
        </div>
    )
};