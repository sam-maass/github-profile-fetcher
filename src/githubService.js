import { Subject } from "rxjs";

const userProfile = new Subject();

export const githubService = {
  getUserInfo: async name => {
    userProfile.next({ isLoading: true });
    const res = await fetch("https://api.github.com/users/" + name);
    const user = await res.json();
    userProfile.next({ ...user });
  },
  subscribe: cb => userProfile.asObservable().subscribe(cb)
};
