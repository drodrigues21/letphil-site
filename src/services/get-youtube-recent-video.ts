import { YoutubeDataAPI } from "youtube-v3-api";

const API_KEY =
  import.meta.env.VITE_YOUTUBE_API_KEY ||
  "AIzaSyCW3112QkiJfjwdKmzMhcpfDpfrMPeTiH4";

const CHANNEL_ID = "UCadUgezGZkA5IknHj2C89yg";

const api = new YoutubeDataAPI(API_KEY);

export default async function getYoutubeRecentVideo(): Promise<null | any[]> {
  try {
    const result = (await api.searchAll("", 1, {
      channelId: CHANNEL_ID,
      order: "date",
    })) as any[];
    return result;
  } catch (error: unknown) {
    console.error("error =", error);
    return null;
  }
}
