import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
        >
            <Spinner
                animation="border"
                role="status"
                style={{ width: '4rem', height: '4rem' }}
            >
            </Spinner>
        </div>
    );
};

export default Loader;