import Image from "next/image";

export default function Home() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 100,
                    padding: "30px 100px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/1.png" />
                    <Image src="/images/2.png" />
                    <Image src="/images/3.png" />
                    <Image src="/images/4.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/5.png" />
                    <Image src="/images/6.png" />
                    <Image src="/images/7.png" />
                    <Image src="/images/8.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/9.jpg" />
                    <Image src="/images/10.png" />
                    <Image src="/images/11.jpg" />
                    <Image src="/images/12.jpg" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/13.png" />
                    <Image src="/images/14.png" />
                    <Image src="/images/16.png" />
                    <Image src="/images/15.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/17.jpg" />
                    <Image src="/images/18.png" />
                    <Image src="/images/19.jpg" />
                    <Image src="/images/20.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/21.jpg" />
                    <Image src="/images/22.jpg" />
                    <Image src="/images/23.jpg" />
                    <Image src="/images/24.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/25.png" />
                    <Image src="/images/26.jpg" />
                    <Image src="/images/27.png" />
                    <Image src="/images/28.png" />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Image src="/images/29.png" />
                    <Image src="/images/30.png" />
                    <Image src="/images/31.png" />
                    <Image src="/images/32.png" />
                </div>
            </div>
        </>
    );
}
