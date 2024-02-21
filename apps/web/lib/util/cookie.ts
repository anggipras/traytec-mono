export const setCookie = (
  name: string,
  value: any,
  options?: {
    maxAge?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }
) => {
  const expires = options?.maxAge
    ? new Date(Date.now() + options.maxAge * 1000).toUTCString()
    : undefined;
  const path = options?.path || "/";
  const domain = options?.domain || "";
  const secure = options?.secure || false;
  const httpOnly = options?.httpOnly || false;

  document.cookie = `${name}=${value}${expires ? `; expires=${expires}` : ""}${
    path ? `; path=${path}` : ""
  }${domain ? `; domain=${domain}` : ""}${secure ? `; secure` : ""}${
    httpOnly ? `; httpOnly` : ""
  }`;
};

export const getCookie = (name: string) => {
  const cookieArray = document.cookie.split("; ");
  return cookieArray
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
};
