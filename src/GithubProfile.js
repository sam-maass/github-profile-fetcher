import React, { useEffect, useState } from "react";
import { githubService } from "./githubService";
export function GithubProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    githubService.subscribe(profile => setProfile(profile));
  });

  return (
    <div className="github-profile">
      {profile.isLoading && "Loading Profile Info"}
      {!profile.isLoading && (
        <ul>
          {Object.keys(profile).map((key, idx) => (
            <li key={idx}>
              {key}: {profile[key]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
