
const rightPanel = document.querySelector("#right")
const leftPanel = document.querySelector("#left")
const typesList = document.querySelector("#types")
const addSubtypeModal = document.querySelector("#add-subtype-modal")
const addTypeModal = document.querySelector("#add-type-modal")
const addResolutionModal = document.querySelector("#add-resolution-modal")

const modalAddSubtypeTypeId = document.querySelector("#type-id")
const modalAddResolutionTypeId = document.querySelector("#resolution-modal-type-id")
const modalAddResolutionSubTypeId = document.querySelector("#resolution-modal-subtype-id")
const resoType = document.querySelector("#reso-type")

const alert = document.querySelector("#alert")

const liTypes = Array.prototype.slice.call(typesList.children)
let resolutionsArray =
    [
        {
            "id": "focus",
            "subtypes": [
                {
                    "id": 1620241873131,
                    "title": "Visual indicator",
                    "commonText": "",
                    "resolutions": []
                },
                {
                    "id": 1620243075479,
                    "title": "managing",
                    "commonText": "Consider moving the focus to the mentioned element once ..  (condition)",
                    "resolutions": [
                        {
                            "id": 1620242762340,
                            "text": "Consider moving the accessibility focus when navigating between the Radio Buttons, ensuring with this, the visible focus indicator on the currently focused element. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method specifying the value of AccessibilityEvent.TYPE_VIEW_FOCUSED as parameter.",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\n-https://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view",
                            "type": "android"
                        },
                        {
                            "id": 1620242882099,
                            "text": "Consider moving the accessibility focus to the error message once the validation is completed, ensuring with this the announcement of the errors by the Screen Reader. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method specifying the value of AccessibilityEvent.TYPE_VIEW_FOCUSED as parameter.\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\nhttps://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n",
                            "type": "android"
                        },
                        {
                            "id": 1620243075163,
                            "text": "Ensure moving the accessibility focus to the title of the Tooltip once displayed. \nAndroid:\nConsider managing the accessibility focus using the view's sendAccessibilityEvent method specifying the value of AccessibilityEvent.TYPE_VIEW_FOCUSED as parameter.\niOS:\nConsider moving the accessibility focus using the  UIAccessibility Notifications. Ensure the target element is marked as an accessibilityElement.\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\nhttps://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\nhttps://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post\nhttps://github.com/dequelabs/Deque-University-for-iOS/issues/41",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1620315824383,
                    "title": "Hidden elements",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620254149595,
                            "text": "Ensure hiding the \"X\" button from Screen Reader users when it's not displayed. \nAndroid: Consider setting the view's attribute android:importantForAccessiblity to false. \niOS: Appraise setting the component isAccessibilityElement property to false. \n\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\n-https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement",
                            "type": "android and ios"
                        },
                        {
                            "id": 1620254306805,
                            "text": "\nEnsure checking if the hidden elements focused by the screen reader are necessary, otherwise remove or hide them from screen readers. Apprise moving the focus the following order:\nFrom \"Ver todas\" button to the slider container announcing the carousel title, then move it to the \"Eliminar experiencia\" button. Next, to the slide title, ensuring the slide current position is announced. Finally the focus goes next to the text of the slider.\nHiding elements:\nAndroid:\nSet the android:importantForAccessiblity attribute to false or use android:visibility=\"gone\". \niOS:\nSetting the component isAccessibilityElement property to false.\nSlide title:\nProvide a descriptive value (i.e. \"Slide 1 de 3, Mis viajes\")\nAndroid: Set android:contentDescription \niOS: Set accessibilityLabel \nFocus:\nManage the accessibility focus using the sendAccessibilityEvent method in Android and UIAccessibility Notifications in iOS.",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\nhttps://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\n",
                            "type": "android and ios"
                        },
                        {
                            "id": 1620254398112,
                            "text": "Android: \nSet the hidden element's android:importantForAccessibility attribute to false. Consider providing an android:contentDescription attribute to the \"Deuda\" text element specifying the information to be announced and heading level. (i.e. \"Novedades 10.0.19 carousel, slide 1 of 4, Deuda heading level 2\")\n\niOS:\nSet the isAccessibilityElement property to false on the hidden element. Consider setting the accessibilityLabel property to the \"Deuda\" text element specifying the information to the announced and heading level. (i.e. \"Novedades 10.0.19 carousel, slide 1 of 4, Deuda heading level 2\")\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\nhttps://developer.android.com/reference/android/view/View.html#attr_android:contentDescription \nhttps://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\nhttps://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel",
                            "type": "android and ios"
                        },
                        {
                            "id": 1620312082475,
                            "text": "Ensure removing the hidden elements from the screen or hide them from Screen Readers users by setting isAccessibilityElement property to false. Consider setting the accessibilityLabel property to the component specifying the information to the announced and heading level. (i.e. \"Novedades 10.0.19 carousel, slide 1 of 4, Deuda heading level 2\")\nhttps://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\n\nAndroid:\nFirst, ensure removing the hidden components from the screen or hide them from Screen Readers users by setting the attribute android:importantForAccessibility to false or using android:visibility=\"gone\". Second, consider providing an android:contentDescription attribute to the component specifying the information to the announced and heading level. (i.e. \"Novedades 10.0.19 carousel, slide 1 of 4, Deuda heading level 2\")\n\n",
                            "code": "",
                            "links": "https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/headings/\nhttps://developer.android.com/reference/android/view/View.html#attr_android:contentDescription\nhttps://developer.android.com/reference/android/view/View#GONE\nhttps://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\n",
                            "type": "android and ios"
                        },
                        {
                            "id": 1620312189434,
                            "text": "Ensure not moving the focus to the elements that are hidden or are not supposed to be focused until previous information is entered. \nConsider hiding the elements using android:visibility=\"gone\" taking into account that when using “gone” it is like removing it from the layout. Apprise hiding from Screen Readers users, the elements that are not supposed to be focused until certain conditions are met, by setting the view's attribute android:importantForAccessibility to false. \n\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/View#GONE\nhttps://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\n",
                            "type": "android"
                        },
                        {
                            "id": 1620312430374,
                            "text": "Ensure hiding the icons from screen readers by setting an aria-hidden attribute with a value of \"true\". Additionally, consider avoiding the use of pseudo-elements even with decorative content.\n\n\n",
                            "code": "<span class=\"commonicon-location icon-cutom-loc-hrs\" aria-hidden=\"true\"></span>",
                            "links": "https://www.w3.org/TR/wai-aria-1.1/#aria-hidden\nhttps://webaim.org/techniques/aria/\n\nhttps://www.w3.org/WAI/GL/2011/WD-UNDERSTANDING-WCAG20-20110310/navigation-mechanisms-focus-order.html https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute\n",
                            "type": "web"
                        },
                        {
                            "id": 1620315824065,
                            "text": "Ensure hiding the \"X\" button from Screen Reader users when it's not displayed. Consider setting the component isAccessibilityElement property to false to hide it from Screen readers.\n",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\n",
                            "type": "ios"
                        }
                    ]
                },
                {
                    "id": 1620320859462,
                    "title": "Allowing",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620315288566,
                            "text": "Consider setting the card container isAccessibilityElement property to true, as well as for the elements inside. Take into account that if a parent element has isAccessibilityElement=\"true\", all the elements inside won't receive accessibility focus.\n",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\n",
                            "type": "ios"
                        },
                        {
                            "id": 1620320859083,
                            "text": "Ensure the visible checkbox receives the accessibility focus and the hidden checkbox is removed from the screen. Consider using the android:importantForAccessibility attribute with a value of true on the element. ",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility",
                            "type": "android"
                        }
                    ]
                },
                {
                    "id": 1620740792300,
                    "title": "Focus Order",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620312725435,
                            "text": "Ensure moving the focus to the corresponding element in the correct order as they are presented on the screen. Appraise using the view's sendAccessibilityEvent method for focus management and android:accessibilityTraversalAfter / android:accessibilityTraversalBefore attributes for setting the order if needed.\n\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\n-https://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n-https://developer.android.com/reference/android/view/View#attr_android:accessibilityTraversalAfter\n-https://developer.android.com/reference/android/view/View#attr_android:accessibilityTraversalBefore\n",
                            "type": "android"
                        },
                        {
                            "id": 1620312785163,
                            "text": "Consider moving the focus directly to the text \"Descubre todas las experiencias que ponemos a tu disposición\" and not placing the focus on the slide container. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method.\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\n",
                            "type": "android"
                        },
                        {
                            "id": 1620312865360,
                            "text": "Consider moving the accessibility focus to the logo once the dialog closes. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method specifying the value of AccessibilityEvent.TYPE_VIEW_FOCUSED as parameter.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\n",
                            "type": "android"
                        },
                        {
                            "id": 1620312952987,
                            "text": "Consider moving the accessibility focus to the title of the screen once it is fully loaded, allowing with this, that the Screen's title gets announced. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method specifying the value of AccessibilityEvent.TYPE_VIEW_FOCUSED as parameter.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int)\n-https://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n",
                            "type": "android"
                        },
                        {
                            "id": 1620313899319,
                            "text": "Consider moving the focus to the back button once the screen opens. One technique to manage focus is by calling the View class requestFocus() method.\n",
                            "code": "",
                            "links": "https://developer.android.com/reference/android/view/View#requestFocus()\nhttps://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n",
                            "type": "android"
                        },
                        {
                            "id": 1620315021108,
                            "text": "Ensure moving the accessibility focus to the \"Límite diario de retirada de efectivo\" button after the \"Cerrar\" (x) button is activated. Appraise managing the accessibility focus using the view's sendAccessibilityEvent method.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/accessibility/AccessibilityEventSource#sendAccessibilityEvent(int) \n-https://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n",
                            "type": "android"
                        },
                        {
                            "id": 1620315159628,
                            "text": "Ensure moving the accessibility focus to the title of the screen \"Modificar límites\" once it's fully loaded. Consider moving the accessibility focus to the title of the screen by using the UIAccessibility Notifications. \n",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/uikit/uiaccessibility/1615194-post \n-https://github.com/dequelabs/Deque-University-for-iOS/issues/41\n",
                            "type": "ios"
                        },
                        {
                            "id": 1620316525783,
                            "text": "Ensure moving the focus to the input field \"Clave SMS\" once its content is cleared by activating the \"Borrar contenido del campo de insercion\". Appraise calling the View class requestFocus() method on the field once the button is activated.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#requestFocus()\n-https://stackoverflow.com/questions/28472985/android-set-talkback-accessibility-focus-to-a-specific-view\n",
                            "type": "android"
                        },
                        {
                            "id": 1620740791947,
                            "text": "Ensure moving the focus to the corresponding element in the correct order as they are presented on the screen.\nConsider using the shouldGroupAccessibilityElement attribute to have a precise order if the native order is altered.\n",
                            "code": "",
                            "links": "-https://a11y-guidelines.orange.com/en/mobile/ios/development/#reading-order\n",
                            "type": "ios"
                        }
                    ]
                },
                {
                    "id": 1621261355740,
                    "title": "Avoiding Focus",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316438788,
                            "text": "Consider setting the view's attribute android:importantForAccessiblity to false on the decorative image, avoiding this element from receiving accessibility focus.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\n",
                            "type": "android"
                        },
                        {
                            "id": 1620411262275,
                            "text": "Consider checking if the hidden element is important for the view, if so, appraise making it visible, otherwise remove it from the screen or hide it from Screen Reader by setting the android:importantForAccessibility (isAccessibilityElement in iOS) attribute to false. \n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#attr_android:importantForAccessibility\n-https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement\n",
                            "type": "android and ios"
                        },
                        {
                            "id": 1621261355405,
                            "text": "Ensure checking if the \"Tarjeta\" hidden element is important for the view, if so, appraise making it visible, otherwise remove it from the screen or hide it from Screen Reader users by setting its isAccessibilityElement property to false.",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement",
                            "type": "ios"
                        }
                    ]
                }
            ]
        },
        {
            "id": "zoom",
            "subtypes": [
                {
                    "id": 1620316655341,
                    "title": "Zoom",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316655018,
                            "text": "Ensure the auto-sizing feature on the TextView components is not disabled. Consider setting the android:autoSizeTextType attribute to \"uniform\".\n",
                            "code": "",
                            "links": "-https://developer.android.com/guide/topics/ui/look-and-feel/autosizing-textview",
                            "type": "android"
                        }
                    ]
                },
                {
                    "id": 1621261190379,
                    "title": "Text resize",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316567549,
                            "text": "Ensure the TextView text size is set using scale-independent units. Consider setting the android:textSize attribute using the scale-independent units instead of device-dependent units, allowing this, that the TextViews scale once the Text size preference changes.\n\n",
                            "code": "android:textSize=\"12sp\"",
                            "links": "-https://medium.com/@rayacevedo45/android-sp-vs-dp-ca50ad53162d\n-https://developer.android.com/reference/android/widget/TextView\n",
                            "type": "android"
                        },
                        {
                            "id": 1621261190055,
                            "text": "Ensure the TextView text size (UITextView for iOS) is set with scale-independent units. Consider using the scale-independent units instead of device-dependent units, allowing this, that the TextViews scale once the Text size preference changes.\n",
                            "code": "android:textSize=\"12sp\"\n",
                            "links": "-https://medium.com/@rayacevedo45/android-sp-vs-dp-ca50ad53162d\n-https://developer.android.com/reference/android/widget/TextView\n-https://developer.apple.com/documentation/uikit/uitextview\n",
                            "type": "android and ios"
                        }
                    ]
                }
            ]
        },
        {
            "id": "errors",
            "subtypes": [
                {
                    "id": 1620314055024,
                    "title": "Message announcement",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620314054705,
                            "text": "Consider moving the focus to the first field with errors once the validation is made, allowing with this the announcement of the error message described for the field. One technique to manage focus is making this object the first to respond by calling the method becomeFirstResponder().\n\n",
                            "code": "",
                            "links": "https://developer.apple.com/documentation/uikit/uiresponder/1621113-becomefirstresponder\n",
                            "type": "ios"
                        }
                    ]
                },
                {
                    "id": 1620316308592,
                    "title": "Validation",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316308268,
                            "text": "Ensure the validation is triggered and the error message is displayed and announced once the accessibility focus is moved away from the Edit box. Consider capturing the swipe event and move the application focus to ensure the validation is triggered. Appraise using the View class requestFocus() method.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#requestFocus()\n",
                            "type": "android"
                        }
                    ]
                }
            ]
        },
        {
            "id": "widgets",
            "subtypes": [
                {
                    "id": 1620315746424,
                    "title": "Alert",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620314543830,
                            "text": "Ensure when an important part of the content changes Screen Reader users hear feedback. Consider implementing the alert message as an alert dialog according to the Wai Aria Authoring Practices pattern. Some features that should be added are:  a role=\"alertdialog\" and aria-modal=\"true\". Also, the content and label might be referenced on this element by using aria-labelledby and aria-describedby attributes.  Apprise implementing the focus management and keyboard interactions.\n",
                            "code": "",
                            "links": "-https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html\n-https://accessibility.huit.harvard.edu/provide-notification-dynamic-changes-content\n",
                            "type": "web"
                        },
                        {
                            "id": 1620315746102,
                            "text": "Consider not automatically dismissing the message and keep it visible. Appraise proving a button allowing the user to close it.\n",
                            "code": "",
                            "links": "-https://stackoverflow.com/questions/5810084/android-alertdialog-single-button\n",
                            "type": "android"
                        }
                    ]
                },
                {
                    "id": 1621026092869,
                    "title": "Fields",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1621026092327,
                            "text": "Consider using a native Edit text component (TextView for Android and UITextField for iOS), or implement a custom component that follows the native behavior and features. \n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/widget/TextView\n-https://developer.apple.com/documentation/uikit/uitextfield\n",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1621270346251,
                    "title": "Carousel",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620740636835,
                            "text": "Consider including the \"Carrusel\" word and the current slide number and the total of the slides, as part of the announcement of the first slide title. Appraise using android:contentDescription attribute ( accessibilityLabel in iOS) with these values and the current title of the current Slide. (i.e. \"Carrusel Diapositiva 1 de 4 El mando a distancia de tus tarjetas\"). Consider removing from the screen the hidden element that announces the current slide number and the total of the slides, taking into account this info is going to be announced.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription\n-https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel",
                            "type": "android and ios"
                        },
                        {
                            "id": 1621270345929,
                            "text": "In the case of a carousel you should respond to both accessibilityIncrement() and accessibilityDecrement() functions to advance and move back in the carousel.",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/accessibility/delivering_an_exceptional_accessibility_experience",
                            "type": "ios"
                        }
                    ]
                },
                {
                    "id": 1621959969800,
                    "title": "Modal",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620314440766,
                            "text": "Ensure the content of the modal is properly announced to the Screen Reader users. Consider implementing the alert message as an alert dialog according to the Wai Aria Authoring Practices pattern. Some features that should be added are:  a role=\"alertdialog\" and aria-modal=\"true\". Also, the content and label might be referenced on this element by using aria-labelledby and aria-describedby attributes.  Apprise implementing the focus management and keyboard interactions.\n",
                            "code": "",
                            "links": "-https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html\n",
                            "type": "web"
                        },
                        {
                            "id": 1621959969441,
                            "text": "Ensure the focus is moved only inside the modal. Consider providing a behavior in a way that the focus loops between focusable elements contained inside the dialog.\n",
                            "code": "",
                            "links": "-https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal\n-https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html\n",
                            "type": "web"
                        }
                    ]
                }
            ]
        },
        {
            "id": "labels",
            "subtypes": [
                {
                    "id": 1620470546586,
                    "title": "Headings",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620470546215,
                            "text": "Consider proving the correct heading semantic for the element by using android:accessibilityHeading= true in Android and UIAccessibilityTraitHeader in iOS.\n",
                            "code": "",
                            "links": "-https://developer.android.com/guide/topics/ui/accessibility/principles#headings_within_text\n-https://developer.apple.com/documentation/uikit/uiaccessibilitytraitheader",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1620674653181,
                    "title": "Label Group",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620674652815,
                            "text": "Consider adding an android:contentDescription attribute ( accessibilityLabel in iOS)  to the radio buttons with a value that includes the visible group label and its visible label (i.e. \"Permitir todos Pagos en internet y no presenciales\")\n",
                            "code": "",
                            "links": "-https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/grouping-form-elements/\n-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription\n-https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel\n",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1620769344261,
                    "title": "Descriptions",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620332321123,
                            "text": "Consider providing an android:contentDecription attribute with a value that includes the operation name and \"Modificar\" (i.e. Pagos presenciales Modificar\").",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription",
                            "type": "android"
                        },
                        {
                            "id": 1620769343722,
                            "text": "Consider proving a description to the element that contains the card number with a value that includes these two visible card features. Ensuring with this the visible information is announced to the Screen Reader users.\nAndroid:\nUse android:contentDecription \nFor example:\nandroid:contentDescription= \"Banco BBVA  Tarjeta Visa  Número de tarjeta 123456... \"\niOS:\nUse the accessibilityLabel property specifying the information to the announced.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription\n-https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel\n",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1621258977339,
                    "title": "Visible Label",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620314686274,
                            "text": "Consider using the native TextView for labeling the Edit box and add an android:labelFor attribute referencing the Edit box id, or implement a custom component having the native behavior. Also, remove the hidden label component.\n",
                            "code": "",
                            "links": "-https://developer.android.com/guide/topics/ui/accessibility/principles#content-pairs \n-https://www.deque.com/blog/accessible-text-input-android/\n",
                            "type": "android"
                        },
                        {
                            "id": 1621258976978,
                            "text": "Ensure the accessible name for the control includes the visible label. Consider proving an android:contentDecription attribute to the element ( accessibilityLabel for iOS ) with values like, for example: \"Tarjeta Activada\"/ \"Tarjeta Desactivada\" according to its state.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription \n-https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel\n",
                            "type": "android and ios"
                        }
                    ]
                },
                {
                    "id": 1623164784956,
                    "title": "Asociation",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1623164784934,
                            "text": "Consider explicitly associating the visible labels with the inputs by providing an id attribute to them, if needed, and referencing it on the label's for attributes. ",
                            "code": "<label for=\"return-date-input\" class=\"text-left truncate css-z721ck\">Return date</label>\n<input id=\"return-date-input\" class=\"w-full focus:outline-none truncate overflow-ellipsis bg-transparent\" type=\"text\" value=\"June 22, 2021\">\n",
                            "links": "https://www.w3.org/WAI/tutorials/forms/labels/\n",
                            "type": "web"
                        }
                    ]
                }
            ]
        },
        {
            "id": "announcements",
            "subtypes": [
                {
                    "id": 1620316227529,
                    "title": "Avoiding",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620314819554,
                            "text": "Consider avoiding any announcement to the Screen Reader users once the amount is selected from the list. Ensure when the accessibility focus return to the menu button its visible label is correctly announced. Appraise preventing any notifications to the accessibility service by removing any use of announceForAccessibility.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#announceForAccessibility(java.lang.CharSequence)",
                            "type": "android"
                        },
                        {
                            "id": 1620316227201,
                            "text": "Ensure avoiding any announcement to the user once the screen is loaded. Consider preventing any notifications to the accessibility service and letting the user navigating for the Screen in a logical order, receiving feedbacks from every component, that the accessibility focus moves to.\n",
                            "code": "",
                            "links": "-https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html\n-https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification\n",
                            "type": "ios"
                        }
                    ]
                },
                {
                    "id": 1623447582024,
                    "title": "Messages",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316161127,
                            "text": "Ensure announcing the Confirmation message once displayed. Consider calling the method announceForAccessibility on the view once shown.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#announceForAccessibility(java.lang.CharSequence)\n",
                            "type": "android"
                        },
                        {
                            "id": 1620339589962,
                            "text": "Ensure announcing the \"Loading\" message once displayed. Consider using the following suggestions:\nAndroid:\nCalling the method announceForAccessibility on the view once displayed.\n\niOS:\nNotify the accessibility service using the UIAccessibilityPostNotification function specifying UIAccessibilityLayoutChangedNotification.\n\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View#announceForAccessibility(java.lang.CharSequence)\n-https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification\n",
                            "type": "android and ios"
                        },
                        {
                            "id": 1620836417109,
                            "text": "Ensure announcing the Alert message once displayed.\nAndroid: Ensure using the method ViewCompaq.setAccessibilityPaneTitle\n\niOS: Notify the accessibility service using the UIAccessibilityPostNotification function specifying UIAccessibilityLayoutChangedNotification.",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification\n-https://developer.android.com/reference/android/view/View#setAccessibilityPaneTitle(java.lang.CharSequence)",
                            "type": "android and ios"
                        },
                        {
                            "id": 1621261020651,
                            "text": "Ensure announcing the countdown timing in a spaced time interval by notifying the accessibility service using the UIAccessibilityPostNotification. Appraise announcing the remaining time every minute or every 30 seconds. \n",
                            "code": "",
                            "links": "-https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification\n",
                            "type": "ios"
                        },
                        {
                            "id": 1623447492523,
                            "text": "Consider moving the focus to the Next month button when the Previous month is hidden and vice versa. Appraise adding an element to the DOM that presents aria-live=\"polite\" and contains a text value as content that informs the user about the focus movement and the reason why ( i.e. \"The Next button has been removed due that the last month for selecting a date has been reached\")\nNote 1: This live region is set to \"polite\" to avoid interrupting the new focused button announcement. Take into account providing feedback once a button is displayed once more.\nNote 2:  Remove this element from the DOM once is not necessary to avoid being read by the screen readers when navigating using the arrow keys.\n",
                            "code": "",
                            "links": "https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-live\nhttps://www.w3.org/TR/wai-aria-practices-1.2/#alert\nhttps://www.w3.org/TR/wai-aria-practices-1.2/examples/alert/alert.html\n",
                            "type": "web"
                        },
                        {
                            "id": 1623447581671,
                            "text": "Ensure announcing the increased/decreased values. Consider adding an element to the DOM that contains the increased/decreased value as content, and presents aria-live=\"polite\". Its content must change every time a value is increased/decreased, ensuring with this the right announcement to the Screen Readers. Additionally, remove this element from the DOM once is not necessary to avoid being read by the screen readers when navigating using the arrow keys.\nNote: An alert could be implemented as well, taking into account it won't interrupt another announcement. \n\n",
                            "code": "<span aria-live=\"polite\"> Adult(s) 3 </span>",
                            "links": "https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#aria-live\nhttps://www.w3.org/TR/wai-aria-practices-1.2/#alert\nhttps://www.w3.org/TR/wai-aria-practices-1.2/examples/alert/alert.html\n",
                            "type": "web"
                        }
                    ]
                }
            ]
        },
        {
            "id": "grouping",
            "subtypes": [
                {
                    "id": 1620740536196,
                    "title": "List",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1620316085247,
                            "text": "Consider wrapping the statements inside a ListView component provided by android.\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/widget/ListView\n-https://www.javatpoint.com/android-listview-example\n",
                            "type": "android"
                        },
                        {
                            "id": 1620740535724,
                            "text": "Consider proving an android:contentDescription attribute (accessibilityLabel in iOS) with the value of the Radio Button visible label and a value containing the number it represents on the total of the group. (i. e. \"Permitir Todos 1 de 3\")\n",
                            "code": "",
                            "links": "-https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription\n-https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel\n",
                            "type": "android and ios"
                        }
                    ]
                }
            ]
        },
        {
            "id": "text",
            "subtypes": [
                {
                    "id": 1621265263702,
                    "title": "Emphasis",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1621265263379,
                            "text": "Instead of splitting the string into 3 separate strings, use NSAttributedString to create a single string that has both bold and regular text.",
                            "code": "",
                            "links": "-https://www.tutorialspoint.com/how-to-use-bold-and-non-bold-text-in-a-single-uilabel-in-ios-iphone",
                            "type": "ios"
                        }
                    ]
                }
            ]
        },
        {
            "id": "images",
            "subtypes": [
                {
                    "id": 1621612355241,
                    "title": "SVG",
                    "commonText": "",
                    "resolutions": [
                        {
                            "id": 1621602159379,
                            "text": "Consider hiding the icon from Screen Readers by setting an aria-hidden attribute with a value of \"true\". \n",
                            "code": "<svg aria-hidden=\"true\">...</svg>",
                            "links": "-https://a11y-guidelines.orange.com/en/articles/accessible-svg/#svg-online-inline\n-https://www.w3.org/TR/wai-aria-1.1/#aria-hidden\n",
                            "type": "web"
                        },
                        {
                            "id": 1621612354912,
                            "text": "Consider removing the title attribute on the link and adding alternative text that identifies the image logo link. Also, set role=\" img\" to ensure that the SVG is recognized as an image. Have in mind providing the alternative text via <title> element when using SVG inline element. However, not all screen readers make use of it and must be programmatically associated with the <svg> element via aria-labelledby. \n",
                            "code": "<svg ... aria-labelledby=\"svg-title\"> \n<title id=\"svg-title\">Mi cuenta El Corte Inglés Ir al inicio</title>\n ... \n</svg> ",
                            "links": "https://a11y-guidelines.orange.com/en/articles/accessible-svg/#svg-online-inline\nhttps://a11y-guidelines.orange.com/en/articles/accessible-svg/#svg-online-inline\nhttps://a11y-guidelines.orange.com/en/articles/accessible-svg/#svg-online-inline\nhttps://www.w3.org/TR/WCAG20-TECHS/ARIA8.html\nhttps://css-tricks.com/accessible-svgs\n",
                            "type": "web"
                        }
                    ]
                }
            ]
        }
    ]
// Event handlers
const typesClick = (event) => {
    const currentElement = event.target
    clearRightPanel()
    toggleType(currentElement)
    console.log("Type clicked!")

}
const subtypeClick = (event) => {
    const typeId = String(event.target.parentElement.parentElement.parentElement.children[0].innerText).toLowerCase()
    const subtypeTitle = String(event.target.innerText).toLowerCase()
    const subTypeObject = resolutionsArray.find(reso => reso.id == typeId)
    const current = subTypeObject.subtypes.find(subtype => subtypeTitle == String(subtype.title).toLowerCase())

    let content = ""
    clearRightPanel()

    if (current) {
        const capitalizedTitle = current.title.charAt(0).toUpperCase() + current.title.slice(1)
        const capitalizedType = typeId.charAt(0).toUpperCase() + typeId.slice(1)
        content = `
    <div class="d-flex justify-content-center">
    <span class="text-white lead mx-5 mt-3" style="font-size:1.5em"><strong>${capitalizedType} - ${capitalizedTitle}</strong></span>
        <label for="right-panel-reso-type" class ="mt-4 ">Filter by type: </label>
    <select class="form-control mt-3 mx-2" id="right-panel-reso-type" style="width:200px !important;height:40px;">
    <option value = "web">Web</option>
    <option value = "android">Android</option>
    <option value = "ios">iOS</option>
    <option value = "android and ios">Android & iOS</option>
    </select>
    <button class = "button-sm button-gray mt-3" style="height:40px;" onclick="applyFilter(event)">Apply</button>
    
                                <button class="button-sm button-gray m-2 mx-5"
                                    style="height:50px;width:50px;font-size: 1.5em;" onclick="addResolutionClick(event)" data-typeid="${typeId}" data-sub-typeid="${current.id}">+
                                </button>
                            </div>
`
        if (current.commonText)
            content += `       <div class="mb-2 p-3 pb-4" style = "background-color:#444;border-radius: 10px;" >
    <div><strong>Introduction text: </strong></div>${current.commonText}
    <button class="button-sm button-gray"
                                    style="height:fit-content;padding:2px !important;float: right;"
                                    onclick="editCommonText(event)">Edit</button>


   </div >`


        current.resolutions.map(reso => {
            const image = reso.type == "ios"
                ? '<img style="width:40px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/ios1_NJw5x6E6E.png"/>'
                : reso.type == "android"
                    ? '<img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/android1_q65er88Om.png"/>'
                    : reso.type == "web"
                        ? '<img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/web1_RXWngMtjrM.png"/>'
                        : '<div style="width:90px;float:left !important"><img style="width:40px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/ios1_NJw5x6E6E.png"/><img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/android1_q65er88Om.png"/></div>'

            content += `
        <div class="mb-2 p-3 pb-4" style = "background-color:#282a2c;border-radius: 10px;" >
        <div style=''> ${image}<span class='px-3' style='clear:right'>${reso.text}</span></div>
        <input type="hidden" value="${reso.id}" name="resolution-id"/>
        <input type="hidden" value="${current.id}" name="subtype-id" />
        <input type="hidden" value="${typeId}" name="type-id" />`

            if (reso.code.length > 0) {
                content += `<div class="py-2">
            <strong>For example:</strong><br>
            <textarea class="form-control" style="background-color:#444 !important;width:90%;margin-left:20px;border:none !important;color:#CCC">
             ${reso.code}</textarea>
        </div>`
            }

            content += `
        <div class="prewrap"><strong>For more information, please see the following links:</strong><br>${reso.links}</div>
        <button class="button-sm button-gray" style="height:fit-content;padding:2px !important;float: right;" 
            onclick="editResolution(event)">Edit</button>
        <div class="sr-only">${reso.text}<br>`

            if (reso.code.length > 0)
                content += `For example:<br><textarea>${reso.code}</textarea>`

            content +=
                `<br>For more information, please see the following links:<br>${reso.links}</div>
        <button class="button-sm button-gray" style="height:fit-content;padding:2px !important;float: right;"
                                    onclick="copyToClipBoard(event)">Copy</button>

        </div >`
        })
    }

    content += `<div class='d-flex justify-content-center'>
    <button class='button-sm button-gray m-2'style = 'height:50px;width:50px;font-size: 1.5em;' 
        onclick = 'addResolutionClick(event)' 
        data-typeid="${typeId}"
        data-sub-typeid="${current.id}">+</button></div>`

    const newContentDiv = document.createElement("div")
    newContentDiv.innerHTML = content
    clearRightPanel()
    rightPanel.appendChild(newContentDiv)

}
const addResolutionClick = (event) => {

    addResolutionModal.style.display = "flex"
    console.log("Showing - Add Resolution modal")
    modalAddResolutionTypeId.value = event.target.getAttribute("data-typeid")
    modalAddResolutionSubTypeId.value = event.target.getAttribute("data-sub-typeid")

}

// Editing
const editCommonText = (event) => {
    const subTypeId = event.target.parentElement.children[0].value
    const typeId = event.target.parentElement.children[1].value
    console.log("Edit commom text!", "subType:" + subTypeId, "TypeId: " + typeId)
}
const editResolution = (event) => {
    const id = event.target.parentElement.children[0].value
    const idSubtype = event.target.parentElement.children[1].value
    const idType = event.target.parentElement.children[2].value
    console.log("Edit Resolution!", "Res:" + id, "Subtype: " + idSubtype, "Type:" + idType)
}

// Content Functions
const clearRightPanel = () => {
    while (rightPanel.firstChild) {
        rightPanel.removeChild(rightPanel.firstChild);
    }
}
const clearLeftPanel = () => {
    console.log("Clearing left panel ...")
    while (typesList.firstChild) {
        typesList.removeChild(typesList.firstChild);
    }
}
const fillLeftBar = () => {
    console.log("Filling up left bar ....")
    resolutionsArray.forEach(reso => {

        // Inserting Type in DOM    
        const li = document.createElement("li")
        const subList = document.createElement("ul")

        subList.style.backgroundColor = "#3b3f44"

        li.innerHTML = `<div class="text-white display-4 py-2 bg-dark" style="font-size: 1.5em;text-transform: capitalize;">${reso.id}</div>`
        li.children[0].addEventListener("click", (event) => typesClick(event))


        //Inserting SubTypes in DOM
        reso.subtypes.forEach(subtype => {
            const subtypeLi = document.createElement("li")
            subtypeLi.innerHTML = `<div class="text-white display-4 mx-5 py-2" style="font-size: 1.2em;text-transform: capitalize;">${subtype.title}</div>`
            subtypeLi.children[0].addEventListener("click", (event) => subtypeClick(event))
            subList.appendChild(subtypeLi)
        })

        //Inserting buttons
        const addSubtypeButton = document.createElement("div")
        /*      addSubtypeButton.innerHTML = `
              <button class="button-gray" style="height:fit-content;margin:5px 0 0 15px !important;padding:2px !important;text-decoration: none;" 
              onclick="addSubtypeClick(event)" data-typeid="${reso.id}">+ SubType</button>`
      */
        // Add Type li to DOM
        li.appendChild(subList)
        li.appendChild(addSubtypeButton)
        typesList.appendChild(li)
    })
}

const updateLeftPanel = () => {
    clearLeftPanel()
    fillLeftBar()
}
const updateRightPanel = () => {
    clearRightPanel()
}

const toggleType = (elt) => {
    if (elt.nextSibling.style.display != "none") {
        elt.nextSibling.style.display = "none"
        elt.nextSibling.nextSibling.style.display = "none"
    } else {
        elt.nextSibling.style.display = "block"
        elt.nextSibling.nextSibling.style.display = "block"
    }
}
const collapseTypes = () => {
    const typesElements = Array.prototype.slice.call(typesList.children)

    typesElements.forEach(type => {
        toggleType(type.children[0])
    })

}

fillLeftBar()
collapseTypes()




const applyFilter = (event) => {
    const sibling = event.target.nextElementSibling
    const typeId = sibling.getAttribute("data-typeid")
    const subtypeId = sibling.getAttribute("data-sub-typeid")
    const typeObject = resolutionsArray.find(reso => reso.id == typeId)
    const subtypesArray = typeObject.subtypes
    const subtypeObject = subtypesArray.find(obj => obj.id == subtypeId)

    const typeSelected = document.querySelector("#right-panel-reso-type").value

    const filteredResolutions = subtypeObject.resolutions.filter(reso => reso.type == typeSelected)
    let content = ""

    console.log(filteredResolutions)

    filteredResolutions.map(reso => {
        const image = reso.type == "ios"
            ? '<img style="width:40px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/ios1_NJw5x6E6E.png"/>'
            : reso.type == "android"
                ? '<img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/android1_q65er88Om.png"/>'
                : reso.type == "web"
                    ? '<img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/web1_RXWngMtjrM.png"/>'
                    : '<div style="width:90px;float:left !important"><img style="width:40px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/ios1_NJw5x6E6E.png"/><img style="width:45px;float:left !important" src="https://ik.imagekit.io/fo3tfbhs8/android1_q65er88Om.png"/></div>'


        content += `
    <div class="m-2 p-3 pb-4" style = "background-color:#282a2c;border-radius: 10px;" >
    <div style=''> ${image}<span class='px-3' style='clear:right'>${reso.text}</span></div>
    <input type="hidden" value="${reso.id}" name="resolution-id"/>
    <input type="hidden" value="${subtypeId}" name="subtype-id" />
    <input type="hidden" value="${typeId}" name="type-id" />`

        if (reso.code.length > 0) {
            content += `<div class="py-2">
        <strong>For example:</strong><br>
        <textarea class="form-control" style="background-color:#444 !important;width:90%;margin-left:20px;border:none !important;color:#CCC">
         ${reso.code}</textarea>
    </div>`
        }

        content += `
    <div class="prewrap"><strong>For more information, please see the following links:</strong><br>${reso.links}</div>
    <button class="button-sm button-gray" style="height:fit-content;padding:2px !important;float: right;" 
        onclick="editResolution(event)">Edit</button>
    <div class="sr-only">${reso.text}<br>`

        if (reso.code.length > 0)
            content += `For example:<br><textarea>${reso.code}</textarea>`

        content +=
            `<br>For more information, please see the following links:<br>${reso.links}</div>
    <button class="button-sm button-gray" style="height:fit-content;padding:2px !important;float: right;"
                                onclick="copyToClipBoard(event)">Copy</button>

    </div >`
    })

    console.log(content)

    rightPanel.innerHTML = content



}

const copyToClipBoard = (event) => {
    let textedDiv = event.target.previousElementSibling

    console.log(textedDiv)
    var range = document.createRange()
    range.selectNode(textedDiv)
    window.getSelection().removeAllRanges() // clear current selection
    window.getSelection().addRange(range) // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges()// to deselect

    alert.style.display = "flex"
    setTimeout(() => {
        alert.style.display = "none"
    }, 1000)

}


//        U T I L S 



/*
//    C L O N E
const comboBox = document.querySelector("#ex3-combobox")
//const triggerElement = document.querySelector("#button")

const cloneElement = (elementToClone) => {
    let clonedElement = elementToClone.parentElement.cloneNode(true)//elementToClone.parentElement.children[2].cloneNode(true);
    elementToClone.parentElement.appendChild(clonedElement)
    console.log("Element cloned and inserted as sibling!")
}
comboBox.addEventListener("click", (event) => {
    console.log("Event Listener .... added!")
    setTimeout(() => {
        cloneElement(comboBox)
    }, 1000)
})


// Print Key

document.addEventListener("keydown", (event) => {
    const newNode = document.createElement("span")
    newNode.setAttribute("id", "new-node-keydown")
    document.getElementsByTagName("body").item(0).appendChild(newNode)
    newNode.innerHTML = `<div style = "width:200px;height:100px;background-color: rgba(0, 0, 0,0.5);display:flex;
    justify-content: center; align-items: center; position: fixed; top: 40 %; left: 42 %;
    border: white 3px solid; border-radius: 20px; ">
        <span style = "font-size:2em;color:white"> ${event.keyCode != 32 ? event.key : "Space"}</span>
    </div>`
    console.log("Key pressed!")
    setTimeout(() => { document.querySelector("#new-node-keydown").remove() }, 500)
})



// Focus tracker
let focusCounter = 0;
let currentElement = "";
const marker = document.createElement("div")

document.addEventListener("keydown", (event) => {
    currentElement = document.activeElement

    if (event.shiftKey) {
        if (event.key == "Tab") {
            console.log(currentElement)
        }
    }
    if (event.key == "Tab") {
        focusCounter++
        marker.innerHTML = `<div style="width:25px;height:25px;border:black 2px solid;
        border-radius:50%;background-color: #00FF00;text-align:center;font-weight:bold;">
        ${focusCounter}
    </div>`

        currentElement.parentElement.appendChild(marker)

        console.log(currentElement)
    }
})



window.addEventListener("keydown", (event) => {
    console.log("keypressed")
    setTimeout(() => {
        document.activeElement.parentElement.parentElement.appendChild(document.activeElement.parentElement)
        console.log("Cloned!")
    }, 1000)

})



async function loadJSON() {
    console.log("fetching ...")
    const response = await fetch('https://api.jsonbin.io/b/603a47e70866664b108477c3')
        .then(response => response.json())
        .then(data => console.log(data));
    // waits until the request completes...
    //console.log(response);
    console.log(" ....DONE!")
}

loadJSON()
/*
const loadContent = () => {
    fetch('https://api.jsonbin.io/b/6036813b0866664b10828a3a/')
        .then(response => response.json())
        .then(data => console.log(data));
}
loadContent()*/


