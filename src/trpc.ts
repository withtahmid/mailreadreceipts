import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
// import { AppRouter } from "../../backend/src/routes";
import { AppRouter } from "./backendTypes/src/routes/index"
import { baseBackendURI } from "./config";

const getToken = ()=>{
    const token = localStorage.getItem("mailreadreceiptstoken") ?? null;
    return token;
}

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${baseBackendURI}/trpc`,
            headers: () => {
                const token = getToken();
                return token ? { Authorization: `Bearer ${token}` } : {};
            }
        })
    ],
    transformer: undefined
});
