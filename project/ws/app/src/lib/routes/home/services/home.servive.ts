import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NSProfileDataV2 } from '../models/profile-v2.model'

const PROTECTED_SLAG_V8 = '/apis/protected/v8'

const API_END_POINTS = {
  DISCUSS_PROFILE: '/apis/protected/v8/discussionHub/users',
  PROFILE_DETAIL: `${PROTECTED_SLAG_V8}/social/post/timeline`,
  SOCIAL_VIEW_CONVERSATION: `${PROTECTED_SLAG_V8}/social/post/viewConversation`,
  getUserdetailsV2FromRegistry: '/apis/protected/v8/user/profileDetails/getUserRegistryById',
  GET_MY_DEPARTMENT: '/apis/protected/v8/portal/spv/mydepartment?allUsers=true',
  GET_ALL_DEPARTMENT: '/apis/proxies/v8/org/v1/search',
  checkValidLogin: '/apis/proxies/v8/api/user/v2/read',
}

@Injectable({
  providedIn: 'root',
})
export class ProfileV2Service {

  constructor(private http: HttpClient) { }
  fetchDiscussProfile(wid: string): Observable<any> {
    return this.http.get<any>(`${API_END_POINTS.DISCUSS_PROFILE}/${wid}`)
  }
  fetchProfile(userId: string): Observable<NSProfileDataV2.IProfile> {
    return this.http.get<NSProfileDataV2.IProfile>(`${API_END_POINTS.getUserdetailsV2FromRegistry}/${userId}`)

  }
  fetchPost(request: any): Observable<any> {
    return this.http.post<any>(API_END_POINTS.SOCIAL_VIEW_CONVERSATION, request)
  }
  getMyDepartment(): Observable<any> {
    return this.http.get<any>(`${API_END_POINTS.GET_MY_DEPARTMENT}`)
  }
  getAllDepartment(): Observable<any> {
    return this.http.get<any>(`${API_END_POINTS.GET_ALL_DEPARTMENT}`)
  }
  checkValidLogin(): Observable<any> {
    return this.http.get<any>(`${API_END_POINTS.checkValidLogin}`)
  }
}
