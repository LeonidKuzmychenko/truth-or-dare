import QuestionResponse from "../dtos/questionResponse";
import axios, {AxiosResponse} from "axios";
import CheckSessionResponse from "../dtos/checkSessionResponse";
import SessionResponse from "../dtos/sessionResponse";

const host = "http://localhost:8080";

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