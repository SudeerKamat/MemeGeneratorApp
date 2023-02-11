import { LightningElement } from 'lwc';

export default class MemeGenerator extends LightningElement {

    getMemeBtn(){
        let meme = this.refs.meme;
        let title = this.refs.title;

        //API URL
        //Github Source - https://github.com/D3vd/Meme_Api
        let url = "https://meme-api.com/gimme/";

        //Array of subreddits of your choice
        let subreddits = ["catmemes", "wholesomemes", "dogmemes"];

        //Choose a random subreddit from the subreddits array
        let randomSubreddit =
        subreddits[Math.floor(Math.random() * subreddits.length)];

        //Fetch data from the api
        fetch(url + randomSubreddit)
        .then((res) => res.json())
        .then((data) => {
            meme.src = data.url;
            title.innerHTML = data.title;
        })
        .catch(error => console.log(error))
    }

}