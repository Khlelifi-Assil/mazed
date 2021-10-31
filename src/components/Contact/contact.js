import './contact.css';
const Contact = () => {
    return (
        <div class="container">       
             <form class="form">
            
            <h2>CONTACTEZ NOUS</h2>
            <p type="Nom:"><input placeholder="Votre Nom.."></input></p>
            <p type="Email:"><input placeholder="Votre Email.."></input></p>
            <p type="Message:"><input placeholder="Votre Message.."></input></p>
            <button>Send Message</button>
            <div>
                <span class="fa fa-phone"></span>001 1023 567
                <span class="fa fa-envelope-o"></span> contact@company.com
            </div>
        </form>
        </div>

    )
}

export default Contact;
