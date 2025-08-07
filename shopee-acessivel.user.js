// ==UserScript==
// @name         Shopee Acessível
// @namespace    http://tampermonkey.net/
// @version      2025.8.7
// @description  Torna os resultados da busca visíveis para o leitor de telas e adiciona atributos de acessibilidade.
// @author       Lucas Aureliano
// @match        https://*.shopee.com.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shopee.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function updateAccessibility() {
        document.querySelectorAll('ul.row.shopee-search-item-result__items > li').forEach(e => {
            e.querySelectorAll('[aria-hidden]').forEach(a => a.removeAttribute('aria-hidden'));
            e.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            e.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            e.querySelectorAll('div.whitespace-normal, div.line-clamp-2').forEach(div => {
                div.setAttribute('role', 'heading');
                div.setAttribute('aria-level', '2');
                div.setAttribute('tabindex', '0');
            });
        });
        let similarHeading = document.querySelector('div.miIYkb');
        similarHeading.setAttribute('role', 'heading');
        similarHeading.setAttribute('aria-level', '2');
        let similar_items = document.querySelector('div.rBfdm_.row');
        similar_items.setAttribute('role', 'list');
        similar_items.querySelectorAll('div.wujux8').forEach(similarItem => {
            similarItem.setAttribute('role', 'listitem');
            similarItem.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            similarItem.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            similarItem.querySelectorAll('div.whitespace-normal, div.line-clamp-2').forEach(div => {
                div.setAttribute('role', 'heading');
                div.setAttribute('aria-level', '3');
            });
        });
        let sortHeading = document.querySelector('.shopee-sort-bar__label');
        sortHeading.setAttribute('role','heading');
        sortHeading.setAttribute('aria-level','2');
        let allStoreProducts = document.querySelector('div.row');
        allStoreProducts.setAttribute('role','list');
        allStoreProducts.querySelectorAll('div.shop-search-result-view__item').forEach(storeProduct => {
            storeProduct.querySelectorAll('[aria-hidden]').forEach(a => a.removeAttribute('aria-hidden'));
            storeProduct.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            storeProduct.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            storeProduct.setAttribute('role', 'listitem');
        });
    }

    window.addEventListener('load', function() {
        updateAccessibility();
    });

    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            updateAccessibility();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
