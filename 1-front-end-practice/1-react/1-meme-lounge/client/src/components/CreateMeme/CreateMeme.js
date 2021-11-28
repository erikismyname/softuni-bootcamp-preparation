const CreateMeme = () => {

    return (
        <section id="create-meme">
            <form id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                    <input type="submit" class="registerbtn button" value="Create Meme" />
                </div>
            </form>
        </section>
    );

};

export default CreateMeme;