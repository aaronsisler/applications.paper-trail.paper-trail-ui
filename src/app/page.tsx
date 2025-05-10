import React from "react";

const redirectUri = "http://localhost:8080/auth/grant-code";
const clientId =
  "493888060498-vu55rlcj4p0sqbf1cpnr2k4am52r72qf.apps.googleusercontent.com";
const scope =
  "https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid";

export default function Home() {
  return (
    <React.Fragment>
      <main className="p-5">
        <section>
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectUri}&response_type=code&client_id=${clientId}&scope=${scope}&access_type=offline`}
          >
            Sign in with Google
          </a>
        </section>
      </main>
    </React.Fragment>
  );
}
