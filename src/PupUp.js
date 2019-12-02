import M from 'materialize-css';

const PopUp = {
    showMessage: (status, message) => {
        if (status === 'success') {
            M.toast({ html: message, classes: 'green', displayLength: 3000 });
        }

        if (status === 'error') {
            M.toast({ html: message, classes: 'red', displayLength: 3000 });
        }
    },
    success: (message) => {
        PopUp.showMessage('success', message);
    },
    error: (message) => {
        PopUp.showMessage('error', message);
    }
}

export default PopUp;
