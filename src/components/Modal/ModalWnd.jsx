import './ModalWnd.css';

export default function ModalWnd({call, onDestroy}) {
    if(!call) {
        return null;
    }

    const closeWnd = (event => {
        if(event.target.className === 'modal') {
            onDestroy();
        }
    })
    return (
        <div className='modal' onClick={closeWnd}>
            <div className="modal-content">
                <i className='close' onClick={onDestroy}>X</i>
                <h1>Remove task ?</h1>
                <div className="btns">
                    <button className='accept'>Ok</button>
                    <button className='reject' onClick={onDestroy}>Close</button>
                </div>
            </div>

        </div>
    )
}