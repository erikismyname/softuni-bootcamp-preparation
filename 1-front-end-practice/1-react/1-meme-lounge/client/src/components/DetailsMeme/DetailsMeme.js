const DetailsMeme = () => {

    return (
        <section id="meme-details">
            <h1>Meme Title: Bad code can present some problems</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="/images/3.png" />
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        Being a programmer is a fun job. And many funny incidents occur throughout a
                        programmer’s career.
                        Here are a few jokes that can be relatable to you as a programmer.
                    </p>
                    <a class="button warning" href="#">Edit</a>
                    <button class="button danger">Delete</button>
                </div>
            </div>
        </section>
    );

};

export default DetailsMeme;