import './index.css'

const Contact = () => {
    return (
        <section class="contact-section">
    <div class="container">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to our team.</p>
        <div class="contact-form">
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn-submit">Send Message</button>
            </form>
        </div>
    </div>
</section>

    )
}

export default Contact