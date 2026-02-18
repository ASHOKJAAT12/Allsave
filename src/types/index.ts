export interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  placeholder: string;
}

export interface DownloadResult {
  title: string;
  thumbnail: string;
  duration: string;
  formats: {
    quality: string;
    format: string;
    size: string;
    url: string;
  }[];
}

export interface DownloadItem {
  url: string;
  thumb?: string;
  type?: string;
}
