
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Ошибка!</h1>
            <p>«Ублюдок, мать твою, а ну, иди сюда, говно собачье, а? Сдуру решил ко мне лезть, ты? Засранец вонючий, мать твою, а? Ну, иди сюда, попробуй меня трахнуть — я тебя сам трахну, ублюдок, онанист чёртов, будь ты проклят! Иди, идиот, трахать тебя и всю твою семью! Говно собачье, жлоб вонючий, дерьмо, сука, падла! Иди сюда, мерзавец, негодяй, гад! Иди сюда, ты, говно, жопа!»</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}