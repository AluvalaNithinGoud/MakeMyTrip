import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ProjectManagementPageComponent } from './pages/project-management-page/project-management-page.component';
import { PmProjectOverviewComponent } from './pages/project-management-page/pm-project-overview/pm-project-overview.component';
import { PmProjectsListComponent } from './pages/project-management-page/pm-projects-list/pm-projects-list.component';
import { PmCreateProjectComponent } from './pages/project-management-page/pm-create-project/pm-create-project.component';
import { PmClientsComponent } from './pages/project-management-page/pm-clients/pm-clients.component';
import { PmTeamsComponent } from './pages/project-management-page/pm-teams/pm-teams.component';
import { PmKanbanBoardComponent } from './pages/project-management-page/pm-kanban-board/pm-kanban-board.component';
import { PmUsersComponent } from './pages/project-management-page/pm-users/pm-users.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsGridComponent } from './pages/events-page/events-grid/events-grid.component';
import { EventsListComponent } from './pages/events-page/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events-page/event-details/event-details.component';
import { CreateAnEventComponent } from './pages/events-page/create-an-event/create-an-event.component';
import { EditAnEventComponent } from './pages/events-page/edit-an-event/edit-an-event.component';
import { SocialPageComponent } from './pages/social-page/social-page.component';
import { ProfileComponent } from './pages/social-page/profile/profile.component';
import { TimelineComponent } from './pages/social-page/profile/timeline/timeline.component';
import { AboutComponent } from './pages/social-page/profile/about/about.component';
import { ActivityComponent } from './pages/social-page/profile/activity/activity.component';
import { ProfileSettingsComponent } from './pages/social-page/profile-settings/profile-settings.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamMembersComponent } from './pages/users-page/team-members/team-members.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { AddUserComponent } from './pages/users-page/add-user/add-user.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PUserProfileComponent } from './pages/profile-page/p-user-profile/p-user-profile.component';
import { PTeamsComponent } from './pages/profile-page/p-teams/p-teams.component';
import { PProjectsComponent } from './pages/profile-page/p-projects/p-projects.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './forms/forms.component';
import { InputSelectComponent } from './forms/input-select/input-select.component';
import { CheckboxesRadiosComponent } from './forms/checkboxes-radios/checkboxes-radios.component';
import { RichTextEditorComponent } from './forms/rich-text-editor/rich-text-editor.component';
import { FileUploaderComponent } from './forms/file-uploader/file-uploader.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { AccordionComponent } from './ui-elements/accordion/accordion.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { BreadcrumbComponent } from './ui-elements/breadcrumb/breadcrumb.component';
import { DropdownsComponent } from './ui-elements/dropdowns/dropdowns.component';
import { ImagesComponent } from './ui-elements/images/images.component';
import { ModalComponent } from './ui-elements/modal/modal.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { ProgressComponent } from './ui-elements/progress/progress.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { VideosComponent } from './ui-elements/videos/videos.component';
import { InputsComponent } from './inputs/inputs.component';
import { NextPageComponent } from './inputs/elements/next-page';
import { BookNowComponent } from './inputs/elements/book-now';
import { MainPageComponent } from '../n1/n1-pages/main-page/main-page.component';
import { NewPageComponent } from '../n1-new-page/new-page/new-page.component';
import { SrcMainPageComponent } from '../n1-software/software-pages/scn-main-page.component';
import { EngMainPageComponent } from '../n1-engineering/engineering-pages/eng-main-page.component';
  
export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {path: '', component: BlankPageComponent},
            {
                path: 'inputs',
                component: FormsComponent,
                children: [
                    {path: '', component: InputsComponent},
                    {path: 'checkbox', component: CheckboxesRadiosComponent},
                    {path: 'radiogroup', component: CheckboxesRadiosComponent},
                    {path: 'select', component: CheckboxesRadiosComponent},
                    {path: 'rich-text-editor', component: RichTextEditorComponent},
                    {path: 'file-uploader', component: FileUploaderComponent}
                ]
            },
            {
                path: 'forms',
                component: FormsComponent,
                children: [
                    {path: '', component: InputSelectComponent},
                    {path: 'checkboxes-radios', component: CheckboxesRadiosComponent},
                    {path: 'rich-text-editor', component: RichTextEditorComponent},
                    {path: 'file-uploader', component: FileUploaderComponent}
                ]
            },
            {
                path: 'ui-kit',
                component: UiElementsComponent,
                children: [
                    {path: '', component: AlertsComponent},
                    {path: 'avatars', component: AvatarsComponent},
                    {path: 'accordion', component: AccordionComponent},
                    {path: 'badges', component: BadgesComponent},
                    {path: 'buttons', component: ButtonsComponent},
                    {path: 'breadcrumb', component: BreadcrumbComponent},
                    {path: 'dropdowns', component: DropdownsComponent},
                    {path: 'images', component: ImagesComponent},
                    {path: 'modal', component: ModalComponent},
                    {path: 'pagination', component: PaginationComponent},
                    {path: 'progress', component: ProgressComponent},
                    {path: 'typography', component: TypographyComponent},
                    {path: 'videos', component: VideosComponent}
                ]
            },
            {
                path: 'icons',
                component: IconsComponent,
                children: [
                    {path: '', component: MaterialSymbolsComponent},
                    {path: 'remixicon', component: RemixiconComponent}
                ]
            },
            {
                path: 'project-management-page',
                component: ProjectManagementPageComponent,
                children: [
                    {path: '', component: PmProjectOverviewComponent},
                    {path: 'projects-list', component: PmProjectsListComponent},
                    {path: 'create-project', component: PmCreateProjectComponent},
                    {path: 'clients', component: PmClientsComponent},
                    {path: 'teams', component: PmTeamsComponent},
                    {path: 'kanban-board', component: PmKanbanBoardComponent},
                    {path: 'users', component: PmUsersComponent}
                ]
            },
            {
                path: 'events',
                component: EventsPageComponent,
                children: [
                    {path: '', component: EventsGridComponent},
                    {path: 'events-list', component: EventsListComponent},
                    {path: 'event-details', component: EventDetailsComponent},
                    {path: 'create-an-event', component: CreateAnEventComponent},
                    {path: 'edit-an-event', component: EditAnEventComponent}
                ]
            },
            {
                path: 'social',
                component: SocialPageComponent,
                children: [
                    {
                        path: '',
                        component: ProfileComponent,
                        children: [
                            {path: '', component: TimelineComponent},
                            {path: 'about', component: AboutComponent},
                            {path: 'activity', component: ActivityComponent}
                        ]
                    },
                    {path: 'settings', component: ProfileSettingsComponent}
                ]
            },
            {
                path: 'users',
                component: UsersPageComponent,
                children: [
                    {path: '', component: TeamMembersComponent},
                    {path: 'users-list', component: UsersListComponent},
                    {path: 'add-user', component: AddUserComponent}
                ]
            },
            {
                path: 'profile',
                component: ProfilePageComponent,
                children: [
                    {path: '', component: PUserProfileComponent},
                    {path: 'teams', component: PTeamsComponent},
                    {path: 'projects', component: PProjectsComponent}
                ]
            },
            {path: 'main-page', component: MainPageComponent},
            {path: 'internal-error', component: InternalErrorComponent},
            
            // Nithin Pages
            {
                path: 'main-page',
                component: MainPageComponent,
            },
            {
                path: 'new-page',
                component: NewPageComponent,
            },
            {
                path: 'software-pages',
                component:SrcMainPageComponent,
            },
            {
                path: 'engineering-pages',
                component:EngMainPageComponent,
            },
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    // Here add new pages component
    {
        path: 'search',
        component: NextPageComponent,
    },
    // {
    //     path: 'main-page',
    //     component: MainPageComponent,
    // },
    {
        path: 'search',
        component: NextPageComponent,
    },
    

    // {
    //     path: 'booknow',
    //     component: BookNowComponent,
    // },
    // {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list

    // ADD NEW PAGE ABOVE THIS COMNT
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];