# import requests
# import yaml


# def api_spec_agent(state):

#     swagger_url = state["swagger_url"]

#     response = requests.get(swagger_url)

#     data = response.json()

#     paths = data.get("paths", {})

#     spec = yaml.dump(
#         {
#             "paths": paths
#         },
#         sort_keys=False
#     )

#     return {
#         "api_spec": spec
#     }

import requests
import yaml


def api_spec_agent(state):

    swagger_url = state["swagger_url"]
    print("Swagger URL =", swagger_url)

    
    response = requests.get(swagger_url)
    print(response.status_code)
    print(response.text[:500])
    if response.status_code != 200:
       raise Exception(
        f"Could not fetch Swagger spec. Status code={response.status_code}"
     )

    try:
      data = response.json()

    except Exception:
      raise Exception(
        f"URL does not return valid JSON.\n\n"
        f"Response:\n{response.text[:300]}"
     )

    paths = data.get("paths", {})

    host = data.get("host")

    base_path = data.get("basePath", "")

    if host:
        base_url = f"https://{host}{base_path}"
    else:
        # OpenAPI3 fallback
        servers = data.get("servers", [])
        base_url = servers[0]["url"] if servers else ""

    spec = yaml.dump(
        {
            "paths": paths
        },
        sort_keys=False
    )

    return {
        "api_spec": spec,
        "base_url": base_url
    }