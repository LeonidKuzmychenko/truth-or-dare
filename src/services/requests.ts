import QuestionResponse from "../dtos/question-response";
import axios, {AxiosResponse} from "axios";
import CheckSessionResponse from "../dtos/check-session-response";
import SessionResponse from "../dtos/session-response";

const host = "http://truth-or-dare-back.eu-central-1.elasticbeanstalk.com";

export async function sessionRequest(session: any): Promise<AxiosResponse<CheckSessionResponse>> {
    const params = new URLSearchParams([['session', session]]);
    return await axios.get(host + "/game/session", {params});
}

export async function startRequest(male: string, female: string): Promise<AxiosResponse<SessionResponse>> {
    const params = new URLSearchParams([
        ['male', male + "🧑"],
        ['female', female + "👧"],
    ]);
    return await axios.get(host + "/game/start", {params});
}

export async function nextQuestionRequest(): Promise<AxiosResponse<QuestionResponse>> {
    let session: any = localStorage.getItem("session");
    const params = new URLSearchParams([['session', session]]);
    return await axios.get(host + "/game/question", {params});
}