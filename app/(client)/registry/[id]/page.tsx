import { Button } from "@/components/ui/button";
import Image from "next/image";

import { AssistiveChipDark } from "@/components/generated/AssistiveChipDark";
import { FamilyAvatar } from "@/components/generated/FamilyAvatar";
import { IconsLocalTaxi } from "@/components/generated/IconsLocalTaxi";
import { StackedCardDark } from "@/components/generated/StackedCardDark";
import { Icon39 } from "@/components/icons/Icon39";
import { IconsMoreVert24Px1 } from "@/components/icons/IconsMoreVert24Px1";
import FamilyMember from "@/components/shared/family-member";
import { DEFAULT_PET_AVATAR_URL, DEFAULT_PET_IMG_URL } from "@/lib/constants";
import { getPetById } from "@/lib/queries/pet";
import { isEmpty, pick } from "lodash-es";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { formatInTimeZone } from "date-fns-tz";

const RegistryDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
    const pet = await getPetById(id);
    if (!id || !pet?.id) {
        return <div className="flex flex-col gap-4">
            <p className="mx-auto my-8 text-m3sysdarkon-surface">没有找到对应宠物,请检查编号</p>
            <Button variant='outline'>
                <Link href="/">回到首页</Link>
            </Button>
        </div>
    } else if (pet?.registration?.status !== 'APPROVED') {
        return <div className="flex flex-col gap-4">
            <p className="mx-auto my-8 text-m3sysdarkon-surface">此ID尚未经过注册,请联系系统管理员</p>
            <Button variant='outline'>
                <Link href="/">回到首页</Link>
            </Button>
        </div>
    } else {
        const kennel = pet?.kennel;
        return (
            <>
                {/* main title */}
                <div className="flex flex-col items-start justify-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    {/* <p className='text-white'>{JSON.stringify(pet)}</p> */}
                    {kennel && <>
                        <div className="inline-flex items-center gap-[8px] px-[4px] py-0 relative flex-[0_0_auto]">
                            <div className="relative w-[24px] h-[24px] bg-m-3sysdarkprimary rounded-[12px]">
                                <div className="relative w-[22px] h-[22px] top-px left-px bg-[#d9d9d9] rounded-[11.25px] bg-[url(/img/dog-company-logo-icon.svg)] bg-[100%_100%]" />
                            </div>
                            <div className="relative w-fit mt-[-1.00px] font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]">
                                {pet?.kennel?.name}
                            </div>
                        </div>
                        {!isEmpty(kennel?.profile) &&
                            <div className="w-full inline-flex items-center gap-1 relative flex-[0_0_auto] overflow-x-scroll no-scrollbar">
                                {kennel.profile.email && <AssistiveChipDark
                                    className="!flex-[0_0_auto]"
                                    configuration="label-icon"
                                    labelText={pet?.kennel?.profile?.email}
                                    override={<Mail className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                    stateProp="enabled"
                                    style="elevated"
                                />}
                                {pet?.kennel?.profile?.mobile && <AssistiveChipDark
                                    className="!flex-[0_0_auto]"
                                    configuration="label-icon"
                                    labelText={pet?.kennel?.profile?.mobile}
                                    override={<Phone className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                    stateProp="enabled"
                                    style="elevated"
                                />}
                                {pet?.kennel?.profile?.wechat && <AssistiveChipDark
                                    className="!flex-[0_0_auto]"
                                    configuration="label-icon"
                                    labelText={pet?.kennel?.profile?.wechat}
                                    override={<Image width={18} height={18} src='/icon/wechat.svg' className="!relative" color="#F8BD48" />}
                                    stateProp="enabled"
                                    style="elevated"
                                />}
                                {/* // show more media links if has: instagram, facebook */}
                                {pet?.kennel?.profile?.instagram && <AssistiveChipDark
                                    className="!flex-[0_0_auto]"
                                    configuration="label-icon"
                                    labelText={pet?.kennel?.profile?.instagram}
                                    override={<Instagram className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                    stateProp="enabled"
                                    style="elevated"
                                />}
                                {pet?.kennel?.profile?.facebook && <AssistiveChipDark
                                    className="!flex-[0_0_auto]"
                                    configuration="label-icon"
                                    labelText={pet?.kennel?.profile?.facebook}
                                    override={<Facebook className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                    stateProp="enabled"
                                    style="elevated"
                                />}
                            </div>
                        }
                    </>}
                </div>
                {/* hero card */}
                <StackedCardDark
                    assistiveChipDark={<Icon39 className="!relative !w-[18px] !h-[18px]" />}
                    cardStateLayerStateEnabledClassName=""
                    className="!self-stretch !h-[360px] !w-full"
                    headerClassName="!tracking-[var(--m3-body-large-letter-spacing)] !text-[length:var(--m3-body-large-font-size)] ![font-style:var(--m3-body-large-font-style)] !font-[number:var(--m3-body-large-font-weight)] !font-m3-body-large !leading-[var(--m3-body-large-line-height)]"
                    iconButtonDarkIcon={<IconsMoreVert24Px1 className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                    mediaClassName="bg-[url(/img/media.png)]"
                    mediaTextContentClassName="!h-[360px]"
                    style="bully"
                    subheadClassName="!mr-[-2.00px] !text-m3sysdarkon-surface"
                    supportingTextClassName=""
                    text={`${pet?.name} ${pet?.nameEn}`}
                    subText={`${pet?.registration?.readableId}`}
                    text1={pet?.ownerName ? `主人：${pet?.ownerName}` : ''}
                    titleClassName="!mr-[-2.00px] !tracking-[var(--m3-body-medium-letter-spacing)] !text-[length:var(--m3-body-medium-font-size)] ![font-style:var(--m3-body-medium-font-style)] !font-[number:var(--m3-body-medium-font-weight)] !font-m3-body-medium !leading-[var(--m3-body-medium-line-height)]"
                    {...pick(pet, ['breed', 'ownerMobile', 'ownerName', 'location', 'color', 'gender'])}
                    avatar={pet?.avatar?.url || DEFAULT_PET_AVATAR_URL}
                    img={pet?.img?.url || DEFAULT_PET_IMG_URL}
                    birthDate={pet?.birthDate ? formatInTimeZone(pet?.birthDate, 'Asia/Shanghai', 'yyyy/MM/dd') : ''}
                />
                {/* family tree */}
                <div className="flex px-0 py-[4px] self-stretch w-full flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                    {/* 父辈 parents */}
                    <div className="flex">
                        <FamilyMember></FamilyMember>
                        <FamilyMember></FamilyMember>

                    </div>
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-[171.33px] items-center justify-center relative">

                            <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                <Image
                                    width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                    alt="Avatar"
                                    src="/img/avatar-3.png"
                                />
                                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                    <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        超级闪电
                                    </div>
                                    <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        Hulk Smash Jr.
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                <Image
                                    width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                    alt="Avatar"
                                    src="/img/avatar-3.png"
                                />
                                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                    <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        超级闪电
                                    </div>
                                    <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        Hulk Smash Jr.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[171.33px] items-center justify-center relative">
                            <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                <Image
                                    width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                    alt="Avatar"
                                    src="/img/avatar-3.png"
                                />
                                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                    <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        超级闪电
                                    </div>
                                    <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        Hulk Smash Jr.
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                <Image
                                    width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                    alt="Avatar"
                                    src="/img/avatar-3.png"
                                />
                                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                    <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        超级闪电
                                    </div>
                                    <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                        Hulk Smash Jr.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <FamilyAvatar
                            className="!flex-[0_0_auto]"
                            ellipse="/img/ellipse-1-8.svg"
                            generation="three"
                            img="/img/ellipse-1-7.svg"
                            isMale1
                            state="default"
                        />
                        <FamilyAvatar
                            className="!flex-[0_0_auto]"
                            ellipse="/img/ellipse-1-6.svg"
                            generation="three"
                            img="/img/ellipse-1-5.svg"
                            isMale1
                            state="default"
                        />
                        <FamilyAvatar
                            className="!flex-[0_0_auto]"
                            ellipse="/img/ellipse-1-4.svg"
                            generation="three"
                            img="/img/ellipse-1-3.svg"
                            isMale1
                            state="default"
                        />
                        <FamilyAvatar
                            className="!flex-[0_0_auto]"
                            ellipse="/img/ellipse-1-2.svg"
                            generation="three"
                            img="/img/ellipse-1-1.svg"
                            isMale1
                            state="default"
                        />
                    </div>
                </div>
            </>
        );
    }


};

export default RegistryDetailPage;