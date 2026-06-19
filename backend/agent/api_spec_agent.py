def api_spec_agent(state):

    with open(
        "backend/specc/auth_api_spec.yaml",
        "r"
    ) as f:

        spec = f.read()

    return {
        "api_spec": spec
    }