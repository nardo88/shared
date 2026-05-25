import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddIcon } from './AddIcon'
import { ArrowBottom } from './ArrowBottom'
import { AudioIcon } from './AudioIcon'
import { BasketIcon } from './BasketIcon'
import { CalendarIcon } from './CalendarIcon'
import { CameraDisabled } from './CameraDisabled'
import { CameraEnabled } from './CameraEnabled'
import { ChatIcon } from './Chat'
import { CheckIcon } from './CheckIcon'
import { ClipIcon } from './ClipIcon'
import { CloseIcon } from './Close'
import { CloseEye } from './CloseEye'
import { CloseFullScreen } from './CloseFullScreen'
import { CollapseIcon } from './Collapse'
import { CopyIcon } from './CopyIcon'
import { CostIcon } from './CostIcon'
import { Crystal } from './Crystal'
import { Description } from './Description'
import { Desktop } from './Desktop'
import { DownloadIcon } from './DownloadIcon'
import { EditIcon } from './EditIcon'
import { EditPageIcon } from './EditPageIcon'
import { EmailIcon } from './EmailIcon'
import { ExpertIcon } from './Expert'
import { FileIcon } from './FileIcon'
import { FilterIcon } from './Filter'
import { FolderIcon } from './FolderIcon'
import { FormatIcon } from './FormatIcon'
import { Geolocation } from './Geolocation'
import { HomeIcon } from './HomeIcon'
import './Icon.stories.scss'
import IconComponent from './IconComponent'
import { ImageIcon } from './ImageIcon'
import { InProcessIcon } from './InProcessIcon'
import { InfoIcon } from './InfoIcon'
import { LevelIcon } from './LevelIcon'
import { Loading } from './Loading'
import { LockIcon } from './LockIcon'
import { Logout } from './Logout'
import { MemberIcon } from './MemberIcon'
import { Message } from './Message'
import { MicDisabled } from './MicDisabled'
import { MicEnabled } from './MicEnabled'
import { MinusIcon } from './MinusIcon'
import { MobileIcon } from './MobileIcon'
import { ModerationFileIcon } from './ModerationFileIcon'
import { NoAccessIcon } from './NoAccessIcon'
import { NotFoundIcon } from './NotFoundIcon'
import { OpenEye } from './OpenEye'
import { PlayBtnICon } from './PlayBtnICon'
import { QualityIcon } from './Quality'
import { QuoteIcon } from './QuoteIcon'
import { Record } from './Record'
import { RemovedUserIcon } from './RemovedUser'
import { ReportsIcon } from './ReportsIcon'
import { ResetIcon } from './ResetIcon'
import { Resize } from './Resize'
import { ReviewIcon } from './ReviewIcon'
import { SaveIcon } from './Save'
import { ScreenShare } from './ScreenShare'
import { SearchIcon } from './SearchIcon'
import { SettingIcon } from './SettingIcon'
import { SortAscIcon } from './SortAscIcon'
import { SortDescIcon } from './SortDescIcon'
import { StarIcon } from './StarIcon'
import { StepIcon } from './StepIcon'
import SupportIcon from './SupportIcon'
import { TableIcon } from './TableIcon'
import { TallIcon } from './TallIcon'
import { TextBold } from './TextBold'
import { TextCenter } from './TextCenter'
import { TextItalic } from './TextItalic'
import { TextLeft } from './TextLeft'
import { TextRight } from './TextRight'
import { TimeIcon } from './TimeIcon'
import { ToggleIcon } from './ToggleIcon'
import { UploadIcon } from './UploadIcon'
import UsersIcon from './UsersIcon'
import { VideoIcon } from './VideoIcon'
import { VolumeHighIcon } from './VolumeHighIcon'
import { VolumeLowIcon } from './VolumeLowIcon'
import { VolumeMutedIcon } from './VolumeMutedIcon'
import { WarningIcon } from './WarningIcon'
import { WideIcon } from './WideIcon'

const meta: Meta<typeof IconComponent> = {
  title: 'shared/icons',
  component: IconComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconComponent>

const ICONS = {
  AddIcon,
  ImageIcon,
  QuoteIcon,
  ArrowBottom,
  AudioIcon,
  BasketIcon,
  CalendarIcon,
  CameraDisabled,
  CameraEnabled,
  ChatIcon,
  CheckIcon,
  ClipIcon,
  CloseIcon,
  CloseEye,
  CloseFullScreen,
  CollapseIcon,
  CopyIcon,
  CostIcon,
  Crystal,
  Description,
  Desktop,
  DownloadIcon,
  EditIcon,
  EditPageIcon,
  EmailIcon,
  ExpertIcon,
  FileIcon,
  FilterIcon,
  FolderIcon,
  FormatIcon,
  Geolocation,
  HomeIcon,
  InfoIcon,
  InProcessIcon,
  LevelIcon,
  Loading,
  LockIcon,
  Logout,
  MemberIcon,
  Message,
  MicDisabled,
  MicEnabled,
  MinusIcon,
  MobileIcon,
  ModerationFileIcon,
  NoAccessIcon,
  NotFoundIcon,
  OpenEye,
  PlayBtnICon,
  QualityIcon,
  Record,
  RemovedUserIcon,
  ReportsIcon,
  ResetIcon,
  Resize,
  ReviewIcon,
  SaveIcon,
  ScreenShare,
  SearchIcon,
  SettingIcon,
  SortAscIcon,
  SortDescIcon,
  StarIcon,
  StepIcon,
  SupportIcon,
  TableIcon,
  TallIcon,
  TextBold,
  TextItalic,
  TextLeft,
  TextCenter,
  TextRight,
  TimeIcon,
  ToggleIcon,
  UploadIcon,
  UsersIcon,
  VideoIcon,
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeMutedIcon,
  WideIcon,
  WarningIcon,
}

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        gap: '10px',
        marginTop: 20,
      }}
    >
      {Object.entries(ICONS).map(([name, Icon]) => {
        return (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Icon size={24} className={`${name} icon`} />
            <div style={{ marginTop: 5, fontSize: 12 }}>{name}</div>
          </div>
        )
      })}
    </div>
  ),
}
