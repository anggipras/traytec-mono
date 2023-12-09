import PluginId from '../../pluginId'
const axios = require('axios')
import { auth } from '@strapi/helper-plugin';

// Plugins for Editor.js
import Image from '@editorjs/image'
import AttachesTool from '@editorjs/attaches'

const requiredTools = {
  image: {
    class: Image,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        "Authorization": `Bearer ${auth.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${PluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const {data} = await axios.post(`/api/${PluginId}/image/byFile`, formData, {
            headers: {
              "Authorization": `Bearer ${auth.getToken()}`
            }
          });

          return data
        },
      }
    }
  },
  attaches: {
    class: AttachesTool,
    config: {
      field: "files.attachment",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        "Authorization": `Bearer ${auth.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${PluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.attachment", file);

          const {data} = await axios.post(`/api/${PluginId}/image/byFile`, formData, {
            headers: {
              "Authorization": `Bearer ${auth.getToken()}`
            }
          });

          const { name, size, ext, url } = data?.file;
          let urlHttp = url;
          if (!urlHttp.startsWith("http://") && !urlHttp.startsWith("https://")) {
            urlHttp = "https://" + url;
          }

          return {
            ...data,
            file: {
              ...data.file,
              title: name,
              url: urlHttp,
              size: size * 1000, // size should be in bytes
              extension: ext.substring(1) // removing dot
            }
          }
        },
      }
    }
  },
}

export default requiredTools
