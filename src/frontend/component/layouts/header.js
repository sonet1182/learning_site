import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header class="header clearfix">
      <button type="button" id="toggleMenu" class="toggle_menu">
        <i class="uil uil-bars"></i>
      </button>
      <button id="collapse_menu" class="collapse_menu">
        <i class="uil uil-bars collapse_menu--icon"></i>
        <span class="collapse_menu--label"></span>
      </button>
      <div class="main_logo" id="logo">
        <Link to="/"
          ><img src="html-items/cursus_main_demo/images/logo.svg" alt=""
        /></Link>
        <Link to="/"
          ><img
            class="logo-inverse"
            src="html-items/cursus_main_demo/images/ct_logo.svg"
            alt=""
        /></Link>
      </div>
      <div class="top-category">
        <div class="ui compact menu cate-dpdwn">
          <div class="ui simple dropdown item">
            <Link to="#" class="option_links p-0" title="categories"
              ><i class="uil uil-apps"></i
            ></Link>
            <div class="menu dropdown_category5">
              <Link to="#" class="item channel_item">Development</Link>
              <Link to="#" class="item channel_item">Business</Link>
              <Link to="#" class="item channel_item">Finance & Accounting</Link>
              <Link to="#" class="item channel_item">IT & Software</Link>
              <Link to="#" class="item channel_item">Office Productivity</Link>
              <Link to="#" class="item channel_item">Personal Development</Link>
              <Link to="#" class="item channel_item">Design</Link>
              <Link to="#" class="item channel_item">Marketing</Link>
              <Link to="#" class="item channel_item">Lifestyle</Link>
              <Link to="#" class="item channel_item">Photography</Link>
              <Link to="#" class="item channel_item">Health & Fitness</Link>
              <Link to="#" class="item channel_item">Music</Link>
              <Link to="#" class="item channel_item">Teaching & Academics</Link>
            </div>
          </div>
        </div>
      </div>
      <div class="search120">
        <div class="ui search">
          <div class="ui left icon input swdh10">
            <input
              class="prompt srch10"
              type="text"
              placeholder="Search for Tuts Videos, Tutors, Tests and more.."
            />
            <i class="uil uil-search-alt icon icon1"></i>
          </div>
        </div>
      </div>
      <div class="header_right">
        <ul>
          <li>
            <a
              href="html-items/cursus_main_demo/create_new_course.html"
              class="upload_btn"
              title="Create New Course"
              >Create New Course</a
            >
          </li>
          <li>
            <a
              href="html-items/cursus_main_demo/shopping_cart.html"
              class="option_links"
              title="cart"
              ><i class="uil uil-shopping-cart-alt"></i
              ><span class="noti_count">2</span></a
            >
          </li>
          <li class="ui dropdown">
            <Link to="#" class="option_links" title="Messages"
              ><i class="uil uil-envelope-alt"></i
              ><span class="noti_count">3</span></Link
            >
            <div class="menu dropdown_ms">
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-6.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <h6>Zoena Singh</h6>
                    <p>
                      Hi! Sir, How are you. I ask you one thing please explain
                      it this video price.
                    </p>
                    <span class="nm_time">2 min ago</span>
                  </div>
                </div>
              </Link>
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-5.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <h6>Joy Dua</h6>
                    <p>
                      Hello, I paid you video tutorial but did not play error
                      404.
                    </p>
                    <span class="nm_time">10 min ago</span>
                  </div>
                </div>
              </Link>
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-8.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <h6>Jass</h6>
                    <p>Thanks Sir, Such a nice video.</p>
                    <span class="nm_time">25 min ago</span>
                  </div>
                </div>
              </Link>
              <a
                class="vbm_btn"
                href="html-items/cursus_main_demo/instructor_messages.html"
                >View All <i class="uil uil-arrow-right"></i
              ></a>
            </div>
          </li>
          <li class="ui dropdown">
            <Link to="#" class="option_links" title="Notifications"
              ><i class="uil uil-bell"></i><span class="noti_count">3</span></Link
            >
            <div class="menu dropdown_mn">
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-1.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <h6>Rock William</h6>
                    <p>
                      Like Your Comment On Video
                      <strong>How to create sidebar menu</strong>.
                    </p>
                    <span class="nm_time">2 min ago</span>
                  </div>
                </div>
              </Link>
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-2.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <h6>Jassica Smith</h6>
                    <p>
                      Added New Review In Video
                      <strong>Full Stack PHP Developer</strong>.
                    </p>
                    <span class="nm_time">12 min ago</span>
                  </div>
                </div>
              </Link>
              <Link to="#" class="channel_my item">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/left-imgs/img-9.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <p>
                      Your Membership Approved <strong>Upload Video</strong>.
                    </p>
                    <span class="nm_time">20 min ago</span>
                  </div>
                </div>
              </Link>
              <a
                class="vbm_btn"
                href="html-items/cursus_main_demo/instructor_notifications.html"
                >View All <i class="uil uil-arrow-right"></i
              ></a>
            </div>
          </li>
          <li class="ui dropdown">
            <Link to="#" class="opts_account" title="Account">
              <img src="html-items/cursus_main_demo/images/hd_dp.jpg" alt="" />
            </Link>
            <div class="menu dropdown_account">
              <div class="channel_my">
                <div class="profile_link">
                  <img
                    src="html-items/cursus_main_demo/images/hd_dp.jpg"
                    alt=""
                  />
                  <div class="pd_content">
                    <div class="rhte85">
                      <h6>Joginder Singh</h6>
                      <div class="mef78" title="Verify">
                        <i class="uil uil-check-circle"></i>
                      </div>
                    </div>
                    <span
                      ><a
                        href="/"
                        class="__cf_email__"
                        data-cfemail="e5828488878a89dcd1d6a58288848c89cb868a88"
                        >[email&#160;protected]</a
                      ></span
                    >
                  </div>
                </div>
                <a
                  href="html-items/cursus_main_demo/my_instructor_profile_view.html"
                  class="dp_link_12"
                  >View Instructor Profile</a
                >
              </div>
              <div class="night_mode_switch__btn">
                <Link to="#" id="night-mode" class="btn-night-mode">
                  <i class="uil uil-moon"></i> Night mode
                  <span class="btn-night-mode-switch">
                    <span class="uk-switch-button"></span>
                  </span>
                </Link>
              </div>
              <a
                href="html-items/cursus_main_demo/instructor_dashboard.html"
                class="item channel_item"
                >Cursus dashboard</a
              >
              <a
                href="html-items/cursus_main_demo/membership.html"
                class="item channel_item"
                >Paid Memberships</a
              >
              <a
                href="html-items/cursus_main_demo/setting.html"
                class="item channel_item"
                >Setting</a
              >
              <a
                href="html-items/cursus_main_demo/help.html"
                class="item channel_item"
                >Help</a
              >
              <a
                href="html-items/cursus_main_demo/feedback.html"
                class="item channel_item"
                >Send Feedback</a
              >
              <a
                href="html-items/cursus_main_demo/sign_in.html"
                class="item channel_item"
                >Sign Out</a
              >
            </div>
          </li>
        </ul>
      </div>
    </header>
        </>
    );
}

export default Header;
