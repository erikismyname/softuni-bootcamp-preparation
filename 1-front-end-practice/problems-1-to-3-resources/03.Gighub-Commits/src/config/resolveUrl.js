export default function resolveUrl(username, repo) {

    return `https://api.github.com/repos/${username}/${repo}/commits`;

}