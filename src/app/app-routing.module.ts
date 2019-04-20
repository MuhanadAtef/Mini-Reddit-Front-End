import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Profile_Components/profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { OverviewComponent } from './Profile_Components/overview/overview.component';
import { PostsComponent } from './Profile_Components/posts/posts.component';
import { CommentsComponent } from './Profile_Components/comments/comments.component';
import { SavedComponent } from './Profile_Components/saved/saved.component';
import { HiddenComponent } from './Profile_Components/hidden/hidden.component';
import { UpvotedComponent } from './Profile_Components/upvoted/upvoted.component';
import { DownvotedComponent } from './Profile_Components/downvoted/downvoted.component';
import { EditCommunityComponent } from './edit-community/edit-community.component';
import { CommunityModeratorsComponent } from './community-moderators/community-moderators.component';

const routes: Routes = [


  { path: 'account-setting', component: AccountSettingComponent },
  { path: 'profile-setting', component: ProfileSettingComponent },
  { path: 'forgot-username', component: ForgotUsernameComponent },
  {
    path: 'user/:username', component: ProfileComponent,
    children: [
      { path: '', component: OverviewComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'saved', component: SavedComponent },
      { path: 'hidden', component: HiddenComponent },
      { path: 'upvoted', component: UpvotedComponent },
      { path: 'downvoted', component: DownvotedComponent },
    ]
  },
  { path: 'community/:CommunityName', component: CommunityComponent },
  { path: 'community/:CommunityName/Edit_community', component: EditCommunityComponent },
  { path: 'community/:CommunityName/Moderators', component: CommunityModeratorsComponent },

{ path: 'settings', component: UserSettingsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
