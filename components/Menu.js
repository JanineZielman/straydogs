import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import React, {useEffect} from "react";
import Modal from 'react-modal';

import { linkResolver } from "../prismicio";

export const Menu = ({ alternateLanguages = [], navigation, settings, page }) => {

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			width: '100vw',
			height: '100vh',
			transform: 'translate(-50%, -50%)',
			backgroundColor: 'black',
			zIndex: '999',
		},
	};

	const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

	function closeAfterClick(){
		setTimeout(setIsOpen(false), 3000);
	}

  return (
    <div className="mobile-menu">
			<div onClick={openModal} className="hamburger"></div>
			<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
				<div className="close" onClick={closeModal}>X</div>
				<div className="nav-links">
					{navigation.data?.links.map((item) => (
						<div
							key={prismicH.asText(item.label)}
							className="nav-item"
						>
							<a href={`/${page.lang}/${item.link.uid}`}>
								<PrismicText field={item.label} />
							</a>
						</div>
					))}
					{alternateLanguages.map((lang) => (
						<div key={lang.lang} className="language">
							<a href={linkResolver(lang)}>
								<span className="sr-only">{lang.lang.slice(0,2)}</span>
							</a>
						</div>
					))}
				</div>
				
			</Modal>
    </div>
  );
};
