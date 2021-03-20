import React from "react";
import Link from "next/link";
import Image from "next/image";
// import BackgroundImage from "gatsby-background-image";
// import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import * as uuid from "uuid";

const blockStyles = {
    "--rows": 16,
    "--width": "1180px",
    "--m-rows": "9",
    "--row-gap": "16px",
    "--row-size": "64px",
    "--attachment": "unset",
    "--column-gap": "16px",
    "--grid-width": "1180px",
    "--column-count": "12",
    "--block-padding": "10px 0 10px 0",
    "--content-width": "1600px",
    "--content-padding": "16px",
    "--m-block-padding": "64px 16px 56px 16px",
    "--oldContentWidth": "1600px",
    "--grid-gap-history": "16px 24px",
};

const defaultStyles = {
    "--text": "center",
    "--align": "flex-start",
    "--justify": "flex-start",
    "--position": "1/3/2/15",
    "--m-element-margin": "0 0 16px 0",
};

const image1Styles = {
    ...defaultStyles,
    "--position": "2/3/4/6",
};

const image2Styles = {
    ...defaultStyles,
    "--position": "2/6/4/9",
};

const image3Styles = {
    ...defaultStyles,
    "--position": "2/9/6/14",
};

const image4Styles = {
    ...defaultStyles,
    "--position": "4/3/8/9",
};

const image5Styles = {
    ...defaultStyles,
    "--position": "8/3/16/15",
};

function Block() {
    moment.now();
    uuid.v4();

    return (
        <section className="block" style={blockStyles}>
            <div
                className="background"
                style={{
                    backgroundImage: `url('/images/6.JPG')`,
                }}
            />
            <div className="block-grid">
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={defaultStyles}
                >
                    <div className="text-box block-grid-item__component">
                        <p className="h-3">
                            <span>Text block</span>{" "}
                            <Link href="/about">about link</Link>.
                        </p>
                    </div>
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image1Styles}
                >
                    <Image src="/images/1.JPG" layout="fill" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image2Styles}
                >
                    <Image src="/images/2.JPG" layout="fill" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image3Styles}
                >
                    <Image src="/images/3.JPG" layout="fill" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image4Styles}
                >
                    <Image src="/images/4.JPG" layout="fill" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image5Styles}
                >
                    <Image src="/images/5.JPG" layout="fill" alt="alt" />
                </div>
            </div>
        </section>
    );
}

export default Block;
