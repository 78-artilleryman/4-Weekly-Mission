import axios from "axios";
import { LinkType } from "../interface/types";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getSampeUser(user?: string) {
  try {
    const response = await fetch(`${BASE_URL}users/1`);
    const responseData = await response.json();
    const { data } = responseData;
    // HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return data;
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getSampleFolder() {
  try {
    const response = await fetch(`${BASE_URL}sample/folder`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getUserFolder() {
  try {
    const response = await fetch(`${BASE_URL}users/1/folders`);
    const responseData = await response.json();
    const { data } = responseData;

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return data;
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function getFolderLink(id: number | null) {
  try {
    if (id) {
      const response = await fetch(`${BASE_URL}users/1/links?folderId=${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } else {
      const response = await fetch(`${BASE_URL}users/1/links`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function searchFolderLink(
  id: number | null,
  text: string | string[] | undefined
) {
  try {
    const linkData = await getFolderLink(id);
    const { data }: { data: LinkType[] } = linkData;

    if (!text) return linkData.data;

    if (typeof text === "string") {
      const ChangeText = text.toLowerCase();

      const filteredData: LinkType[] = data.filter(
        (data) =>
          data.title?.toLowerCase().includes(ChangeText) ||
          data.description?.toLowerCase().includes(ChangeText) ||
          data.url?.toLowerCase().includes(ChangeText)
      );

      return filteredData;
    }
  } catch (e: any) {
    console.log(e);
  }
}

interface FormdataType {
  userEmail: string;
  userPw: string;
}

export async function loginRequest(formdata: FormdataType) {
  try {
    const response = await axios.post(`${BASE_URL}sign-in`, {
      email: formdata.userEmail,
      password: formdata.userPw,
    });

    if (response.status === 200) {
      const res = response.data;
      return res;
    } else if (response.status === 400) {
      console.log("없는 유저 정보");
    } else if (response.status === 500) {
      console.log("서버에러");
    }
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function signupRequest(formdata: FormdataType) {
  try {
    const response = await axios.post(`${BASE_URL}sign-in`, {
      email: formdata.userEmail,
      password: formdata.userPw,
    });

    if (response.status === 200) {
      const res = response.data;
      return res;
    } else if (response.status === 400) {
      console.log("잘 못 된 정보를 입력했습니다.");
    } else if (response.status === 500) {
      console.log("서버에러");
    }
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}

export async function chechEmail(email: string) {
  try {
    const response = await axios.post(`${BASE_URL}check-email`, {
      email: email,
    });

    if (response.status === 200) {
      const res = response.data;
      return res;
    } else if (response.status === 400) {
      console.log("잘 못 된 정보를 입력했습니다.");
    } else if (response.status === 409) {
      console.log("이메일이 중복되었습니다.");
    } else if (response.status === 500) {
      console.log("서버에러");
    }
  } catch (error) {
    // 네트워크 연결 오류 처리
    console.error("Network error:", error);
    return null;
  }
}
