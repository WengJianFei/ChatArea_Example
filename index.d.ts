/**
 * 详细使用配置请访问文档地址：https://www.jianfv.top/ChatAreaDoc/home
 * */
export interface UserInfo {
    id: string,
    name: string,
    avatar?: string | URL,
    pinyin?: string
}

export interface UserProps {
    id?: string,
    name?: string,
    avatar?: string,
    pinyin?: string
}

export interface TagInfo {
    id: string,
    name: string,
    pinyin?: string
}

export interface SelectItem {
    id: string,
    name: string,
    preview?: string | URL
}

export interface UploadImage {
    (file: File): Promise<string | URL>
}

export interface CustomTag {
    dialogTitle: string,
    prefix: string,
    tagList: TagInfo[]
}

export interface SelectTag {
    dialogTitle: string,
    key: string,
    options: SelectItem[]
}

export interface UpdateOption<T> {
    userList?: T[],
    placeholder?: string,
    customTrigger?: CustomTag[],
    selectList?: SelectTag[],
    maxLength?: number,
    copyType?: CopyType[],
    uploadImage?: UploadImage,
    needCallEvery?: boolean,
    needCallSpace?: boolean,
    userProps?: UserProps,
    wrapKeyFun?: { (event: KeyboardEvent): boolean },
    sendKeyFun?: { (event: KeyboardEvent): boolean }
}

export interface Options<T> extends UpdateOption<T> {
    elm: HTMLElement,
    device?: Device, // default auto
    autoFocus?: boolean, // default true
    needDialog?: boolean,  // default true
    needDebounce?: boolean, // default true
    asyncMatch?: boolean, // default false
    dialogLabels?: {
        pcPointDialog?: PCPointDialogLabel, pcPCheckDialog?: PCPCheckDialogLabel, h5Dialog?: H5DialogLabel
    }
}

export interface PCPointDialogLabel {
    title?: string,
    callEveryLabel?: string,
    checkLabel?: string,
    emptyLabel?: string
}

export interface PCPCheckDialogLabel {
    title?: string,
    searchPlaceholder?: string,
    searchEmptyLabel?: string,
    userTagTitle?: string
    checkAllLabel?: string,
    checkEmptyLabel?: string,
    confirmLabel?: string,
    cancelLabel?: string
}

export interface H5DialogLabel {
    title?: string,
    callEveryLabel?: string,
    searchPlaceholder?: string,
    searchEmptyLabel?: string,
    confirmLabel?: string,
    cancelLabel?: string
}

export interface ReduceNodeConfig {
    saveTagData?: boolean,
    needUserId?: boolean,
    needTagId?: boolean,
    needSelectId?: boolean,
    wrapClassName?: string,
    rowClassName?: string,
    imgToText?: boolean,
    identifyLink?: boolean
}

export interface TipOptions {
    tagLabel: string,
    popoverLabel: string,
    codeLabel?: string
}

export type ChatEventName =
    'enterSend'
    | 'operate'
    | 'defaultAction'
    | 'atMatch'
    | 'atCheck'
    | 'tagCheck'
    | 'selectCheck'
    | 'afterAtCheck'
    | 'afterTagCheck'
    | 'afterSelectCheck'
    | 'showAtDialog'
    | 'showTagDialog'
    | 'showSelectDialog'
    | 'elementClicked'
export type CopyType = 'text' | 'image'
export type Device = 'pc' | 'h5' | 'auto'

declare class ChatArea<T = UserInfo> {
    richText: HTMLElement // 文本输入元素
    textLength: number // 当设置配置项maxLength读取到的文本框字符长度

    constructor(options: Options<T>)

    // 修改多个配置项
    updateConfig(updateOption: UpdateOption<T>): void

    // 修改人员列表
    updateUserList(userList: T[]): void

    // 搜索人员列表
    searchUserList(value: string): T[]

    // 获取精简后的文本框dom
    getReduceNode(config?: ReduceNodeConfig): HTMLElement

    // 获取发送文本
    getText(config?: ReduceNodeConfig): string

    // 获取发送的html内容
    getHtml(config?: ReduceNodeConfig): string

    // 逆向解析
    reverseAnalysis(html: string, needConnect?: boolean): Promise<void>

    // 光标处插入html代码
    insertHtml(html: string): Promise<HTMLElement>

    // 插入自定义文本
    insertText(text: string): Promise<void>

    // 获取@人员列表
    getCallUserList(): T[]

    // 获取@人员标签列表
    getCallUserTagList(): T[]

    // 获取自定义触发符元素已选择的数据列表
    getCustomTagList(): Record<string, TagInfo[]>

    // 获取标签选择元素已选择的数据列表
    getSelectTagList(): Record<string, SelectTag[]>

    // 获取输入元素的输入内容
    getInputTagList(): Record<string, (string | null)[]>

    // 置空输入框
    clear(defaultText?: string): Promise<void>

    // 文本框是否为空
    isEmpty(unSpace: boolean): boolean

    // 卸载元素，并释放实例
    dispose(): void

    // 在光标处插入传入的@人员
    setUserTag(user: T): Promise<void>

    // 在光标处插入自定义标签元素
    setCustomTag(tag: TagInfo, prefix: string): Promise<void>

    // 在光标出插入选择标签元素
    setSelectTag(tag: SelectItem, key: string): Promise<void>

    // 在光标处插入输入标签元素
    setInputTag(key: string, placeholder: string, value?: string): Promise<void>

    // 唤起PC人员光标选择弹窗
    showPCPointDialog(): void

    // 唤起PC人员多选弹窗
    showPCCheckDialog(): void

    // 唤起PC自定义触发符选择弹窗
    showPCCustomTagDialog(prefix: string): void

    // 唤起H5@人员弹窗
    showH5Dialog(): void

    // 唤起PC选择标签弹窗
    showPCSelectDialog(key: string, elm?: HTMLElement): void

    // 私有api-匹配光标选择弹窗内容插入@标签
    matchSetTag(user: T): Promise<void>

    // 私有api-单向插入
    onceSetTag(user: T): Promise<void>

    // 私有api-多项插入
    batchSetTag(users: T[]): Promise<void>

    // 私有api-单向插入自定义标签
    onceSetCustomTag(tag: TagInfo): Promise<void>

    // 私有api-匹配光标选择弹窗内容插入自定义标签
    matchSetCustomTag(tag: TagInfo): Promise<void>

    // 删除聊天框内的@人员标签
    delUserTags(ids?: string[] | number[]): Promise<void>

    // 删除聊天框内的自定义标签
    delCustomTags(prefix: string, ids?: string[] | number[]): Promise<void>

    // 删除聊天框内选择标签
    delSelectTags(key: string, ids?: string[] | number): Promise<void>

    // 删除聊天框内输入标签
    delInputTags(keys?: string[]): Promise<void>

    // 禁止聊天框编辑
    disabled(): void

    // 允许聊天框编辑
    enable(): void

    // 撤销
    undo(): Promise<void>

    // 恢复
    redo(): Promise<void>

    // 光标移动
    cursorMove(count: number)

    // 光标删除
    cursorDel(count: number): Promise<void>

    // 打开前置提示标签
    openTipTag(options: TipOptions): Promise<void>

    // 关闭前置提示标签
    closeTipTag(): Promise<void>

    // 修改PC光标选择弹窗默认文案
    revisePCPointDialogLabel(config: PCPointDialogLabel): void

    // 修改PC多选选择弹窗默认文案
    revisePCCheckDialogLabel(config: PCPCheckDialogLabel): void

    // 修改H5选择弹窗默认文案
    reviseH5DialogLabel(config: H5DialogLabel): void

    // 添加事件订阅
    addEventListener(eventName: ChatEventName, callBack: Function): void

    // 移除事件订阅
    removeEventListener(eventName: ChatEventName, callBack: Function): void

    // 创建OperateNode实例
    createOperateNode(): ChatOperateNode
}


export type ChatNodeType = 'gridBox' | 'gridInput' | 'userTag' | 'customTag' | 'selectTag' | 'inputTag' | 'htmlTag'
export type DatasetByType = {
    userTag: { id?: string, name?: string, [keyName: string]: string },
    customTag: { id: string, name: string, prefix: string },
    selectTag: { id: string, name: string, key: string },
    inputTag: { key: string, placeholder: string, value?: string },
    gridBox: undefined,
    gridInput: undefined,
    htmlTag: undefined
}

export interface ChatNode<T extends ChatNodeType> {
    type: T,
    rank?: string,
    text?: string,
    html?: string,
    dataset?: DatasetByType[T],
    children?: ChatNode<T>[]
}

export class ChatOperateNode {
    rankLen: number

    // 获取当前聊天框内容的Node结构集合
    getCurrentNodes(): ChatNode<ChatNodeType>[]

    // 获取rank码
    getRank(index: number): string

    // 根据rank获取对应的Node
    getNodeByRank(rank: string): ChatNode<ChatNodeType> | null

    // 根据rank获取对应的DOM元素
    getElmByRank(rank: string): HTMLElement | null

    // 根据聊天框元素获取对应的rank值
    getRankByElm(elm: HTMLElement): string

    // 修改单个Node数据
    updateNode(node: ChatNode<ChatNodeType>): Promise<void>

    // 插入单个Node数据
    insertNode(node: ChatNode<ChatNodeType>): Promise<void>

    // 根据rank移除对应的Node
    delNodeByRank(rank: string): Promise<void>

    // 覆盖聊天框内的Node结构
    coverNodes(nodes: ChatNode<ChatNodeType>[]): Promise<void>

    // 将光标移动到当前Node
    setCursorNode(node: ChatNode<ChatNodeType>, offset?: number)

    // 选中目标节点
    setSelectNodes(startNode: ChatNode<ChatNodeType>, endNode: ChatNode<ChatNodeType>, startOffset?: number, endOffset?: number)

    // 获取当前光标所处Node
    getCursorNode(): { node: ChatNode<ChatNodeType>, offset: number }

    // 渲染更新下次执行方法
    nextTick(callback: Function): Promise<void>
}

export default ChatArea
