import './loading.css'
const Loading = () => {
    return (
        <>
            <div style={
                {
                    width: '100%',
                    backgroundColor: 'transparent',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '22px'
                }
            }>
                <div className="loader"></div>
            </div>
            
        </>
    );
}

export default Loading;
