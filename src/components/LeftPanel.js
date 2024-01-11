import { Icon } from "@iconify/react";
import React from "react";

export default function LeftPanel() {
    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img
                                    src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais"
                                    className="h-12"
                                    alt="ivr"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">IVR</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="ri:home-line" height={20} className="mx-1" />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="mynaui:telephone" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Numbers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="lucide:contact" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="fluent:contact-card-20-regular" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Campaigns</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="jam:activity" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Activity</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="tdesign:chart-analytics" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="streamline:bill-4" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Billing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center py-1 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <Icon icon="solar:settings-bold-duotone" height={20} className="mx-1" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
