export default function FlexLabel  ({label, info}: {label: string, info: string | number | string[]}) {
    return (
        <div className={'flex gap-1'}>
            <b>{label}: </b><p className={'m-0'}>{Array.isArray(info) ? info?.join(', ') : info}</p>
        </div>
    )
}
