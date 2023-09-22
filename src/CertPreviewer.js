import frm from './components/assets/FRM.png'
import metaFrontEnd from './components/assets/metaFrontEnd.png'

export default function CertPreviewer({ file }) {
    let previewCert;
    switch (file.name) {
        case 'frm':
            previewCert = <img src={frm}/>;
            break;

        case 'mfe':
            previewCert = <img src={metaFrontEnd}/>;
            break;
    
        default:
            previewCert = null
            break;
    }

    return (
        <div id='cert-frame'>
            {previewCert}

        </div>
    )
}
