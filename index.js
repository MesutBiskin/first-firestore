import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gough",
    title: "Irises",
    mdedia: "Oil",
});

await addArt({
    artist: "da Vinci",
    title: "last supper",
    media: "Oil",
});

await getAllArt();



