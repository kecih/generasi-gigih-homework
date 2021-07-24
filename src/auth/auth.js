const spotifyLogin = () => {
    const CLIENT_ID = '6e03088b81d048d38a3334d006415703'
    const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000'
    const SCOPE = 'playlist-modify-private'
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`
}

const getAccessToken = (hash) => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
      // console.log(currentValue);
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
};

export {spotifyLogin, getAccessToken}