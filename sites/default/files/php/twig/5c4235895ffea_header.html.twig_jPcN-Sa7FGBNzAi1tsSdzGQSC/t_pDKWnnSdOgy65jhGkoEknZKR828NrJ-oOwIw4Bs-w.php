<?php

/* @platon/layout/header.html.twig */
class __TwigTemplate_a486aa23b332580444db80ae46734e48db00ae8de61110dd9151218b7196f463 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 3, "for" => 44);
        $filters = array("t" => 18);
        $functions = array("path" => 79, "attach_library" => 97, "url" => 121);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('t'),
                array('path', 'attach_library', 'url')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<header id=\"site-header\">
  <div class=\"container d-flex align-items-center\">
    ";
        // line 3
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 4
            echo "      <div id=\"header-left\">
        ";
            // line 5
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
      </div>
    ";
        }
        // line 8
        echo "    ";
        if (($context["logged_in"] ?? null)) {
            // line 9
            echo "      <div id=\"header-right\" class=\"ml-auto d-flex\">
        ";
            // line 10
            if ($this->getAttribute(($context["page"] ?? null), "admin_opigno", array())) {
                // line 11
                echo "          <div class=\"admin-opigno-block d-none d-md-block dropdown\">
            <a href=\"#\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
              <span class=\"picto\"></span>
            </a>
            <div class=\"dropdown-menu dropdown-menu-right\">
              <div class=\"info d-flex\">
                <div class=\"flex-1\">
                  <div><strong class=\"text-uppercase\">";
                // line 18
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("administration")));
                echo "</strong></div>
                </div>
                <button class=\"close-dropdown\">close</button>
              </div>
              <div class=\"px-4 d-flex menu-wrapper\">
                ";
                // line 23
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "admin_opigno", array()), "html", null, true));
                echo "
              </div>
            </div>
          </div>
        ";
            }
            // line 28
            echo "        <div class=\"user-ilts dropdown d-none d-md-block ml-3\">
          <a href=\"#\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\"></span>
            ";
            // line 31
            if (($context["upcoming_ilts_count"] ?? null)) {
                // line 32
                echo "              <div class=\"unread\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["upcoming_ilts_count"] ?? null), "html", null, true));
                echo "</div>
            ";
            }
            // line 34
            echo "          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 38
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Instructor-Led Training")));
            echo "</strong></div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            ";
            // line 42
            if (($context["upcoming_ilts_count"] ?? null)) {
                // line 43
                echo "              <div id=\"ilts-wrapper\">
                ";
                // line 44
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["upcoming_ilts"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["ilt"]) {
                    // line 45
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["ilt"], "link", array(), "array"), "html", null, true));
                    echo "\" class=\"dropdown-item\">
                    <span>";
                    // line 46
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["ilt"], "title", array(), "array"), "html", null, true));
                    echo "</span>
                  </a>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ilt'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 49
                echo "              </div>
            ";
            }
            // line 51
            echo "          </div>
        </div>
        <div class=\"user-live-meetings dropdown d-none d-md-block ml-3\">
          <a href=\"#\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\"></span>
            ";
            // line 56
            if (($context["upcoming_live_meetings_count"] ?? null)) {
                // line 57
                echo "              <div class=\"unread\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["upcoming_live_meetings_count"] ?? null), "html", null, true));
                echo "</div>
            ";
            }
            // line 59
            echo "          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 63
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Live Meeting")));
            echo "</strong></div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            ";
            // line 67
            if (($context["upcoming_live_meetings_count"] ?? null)) {
                // line 68
                echo "              <div id=\"live-meetings-wrapper\">
                ";
                // line 69
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["upcoming_live_meetings"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["meeting"]) {
                    // line 70
                    echo "                  <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["meeting"], "link", array(), "array"), "html", null, true));
                    echo "\" class=\"dropdown-item\">
                    <span>";
                    // line 71
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["meeting"], "title", array(), "array"), "html", null, true));
                    echo "</span>
                  </a>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['meeting'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 74
                echo "              </div>
            ";
            }
            // line 76
            echo "          </div>
        </div>
        <div class=\"user-notifications dropdown ml-3\">
          <a href=\"";
            // line 79
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("view.opigno_notifications.page_all")));
            echo "\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\"></span>
            ";
            // line 81
            if (($context["notifications_unread_count"] ?? null)) {
                // line 82
                echo "              <div class=\"unread\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["notifications_unread_count"] ?? null), "html", null, true));
                echo "</div>
            ";
            }
            // line 84
            echo "          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 88
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("notifications")));
            echo "</strong></div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            <a id=\"read-all-notifications\" class=\"mark-as-read\" href=\"#\">";
            // line 92
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Mark as all read")));
            echo "</a>
            <div id=\"notifications-wrapper\">";
            // line 93
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["notifications_unread"] ?? null), "html", null, true));
            echo "</div>
            <a id=\"show-all-notifications\" class=\"dropdown-item primary text-center\" href=\"";
            // line 94
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("view.opigno_notifications.page_all")));
            echo "\">
              <span>";
            // line 95
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("See all notifications")));
            echo "</span>
            </a>
            ";
            // line 97
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("opigno_notification/opigno_notification"), "html", null, true));
            echo "
          </div>
        </div>
        <div class=\"user-messages dropdown ml-3\">
          <a href=\"";
            // line 101
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("private_message.private_message_page")));
            echo "\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\"></span>
            ";
            // line 103
            if (($context["unread_thread_count"] ?? null)) {
                // line 104
                echo "              <div class=\"unread\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["unread_thread_count"] ?? null), "html", null, true));
                echo "</div>
            ";
            }
            // line 106
            echo "          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 110
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("messages")));
            echo "</strong></div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            ";
            // line 114
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["private_messages"] ?? null), "html", null, true));
            echo "
            <a class=\"dropdown-item primary text-center\" href=\"";
            // line 115
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("private_message.private_message_page")));
            echo "\">
              <span>";
            // line 116
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("See all messages")));
            echo "</span>
            </a>
          </div>
        </div>
        <div class=\"user-block ml-3 dropdown\">
          <a href=\"";
            // line 121
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\" class=\"d-flex align-items-center\" data-toggle=\"dropdown\">
            <span class=\"picto\" ";
            // line 122
            if (($context["user_picture"] ?? null)) {
                echo "style=\"background-image:url('";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["user_picture"] ?? null), "html", null, true));
                echo "')\"";
            }
            echo "></span>
          </a>
          <div class=\"dropdown-menu dropdown-menu-right\">
            <div class=\"info d-flex\">
              <div class=\"flex-1\">
                <div><strong class=\"text-uppercase\">";
            // line 127
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["user"] ?? null), "username", array()), "html", null, true));
            echo "</strong></div>
                <div class=\"user-status text-uppercase\">";
            // line 128
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("online")));
            echo "</div>
              </div>
              <button class=\"close-dropdown\">close</button>
            </div>
            <a class=\"dropdown-item\" href=\"";
            // line 132
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\">
              <span>";
            // line 133
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("User profile")));
            echo "</span>
            </a>
            <a class=\"dropdown-item\" href=\"";
            // line 135
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.edit_form", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
            echo "\">
              <span>";
            // line 136
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Settings")));
            echo "</span>
            </a>
            <a class=\"dropdown-item\" href=\"https://www.opigno.org\" target=\"_blank\">
              <span>";
            // line 139
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Help")));
            echo "</span>
            </a>
            ";
            // line 141
            if (($context["is_admin"] ?? null)) {
                // line 142
                echo "              <a class=\"dropdown-item about\" href=\"#about\" data-toggle=\"modal\" data-target=\"#aboutModal\">
                <span>";
                // line 143
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("About")));
                echo "</span>
              </a>
            ";
            }
            // line 146
            echo "            <a class=\"dropdown-item primary text-center\" href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("user.logout")));
            echo "\">
              <span>";
            // line 147
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Logout")));
            echo "</span>
            </a>
          </div>
        </div>
        <button class=\"navbar-toggler\"></button>
      </div>
    ";
        }
        // line 154
        echo "  </div>
  <div class=\"search-trigger d-flex align-items-center\">
    <a href=\"#\">
      <div class=\"picto search\">";
        // line 157
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("search")));
        echo "</div>
    </a>
  </div>
  <div id=\"search-form\" style=\"display: none;\">
      ";
        // line 161
        if ((isset($context["opigno_search_form"]) || array_key_exists("opigno_search_form", $context))) {
            // line 162
            echo "        ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["opigno_search_form"] ?? null), "html", null, true));
            echo "
      ";
        } else {
            // line 164
            echo "        ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["search_form"] ?? null), "html", null, true));
            echo "
      ";
        }
        // line 166
        echo "  </div>
</header>

";
        // line 169
        if (($context["is_admin"] ?? null)) {
            // line 170
            echo "  <div class=\"modal\" id=\"aboutModal\">
    <div class=\"modal-dialog\" role=\"document\">
      <div class=\"modal-content\">
        <div class=\"modal-header\">
          <div class=\"flex-1\">
            <div><strong class=\"text-uppercase\">";
            // line 175
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("About")));
            echo "</strong></div>
          </div>
          <button type=\"button\" class=\"close-dropdown\" data-dismiss=\"modal\">
            <span>&times;</span>
          </button>
        </div>
        <div class=\"modal-body\">
          <div class=\"d-flex\">
            <div class=\"left-col mr-4\">
              <img src=\"";
            // line 184
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["opigno_logo"] ?? null), "html", null, true));
            echo "\" alt=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("opigno logo")));
            echo "\">
            </div>
            <div class=\"right-col\">
              <p class=\"text mb-4\">
                ";
            // line 188
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Opigno™ is a Trademark of Connect-i Sàrl, based in Préverenges, Switzerland. For more information regarding Opigno™ please consult the website")));
            echo " <a href=\"https://www.opigno.org\" target=\"_blank\">www.opigno.org</a>.
              </p>
              <p class=\"version\">
                <span class=\"mr-3\">";
            // line 191
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Version :")));
            echo "</span>
                ";
            // line 192
            if (($context["opigno_lms_release"] ?? null)) {
                // line 193
                echo "                  <span class=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["opigno_lms_updates"] ?? null), "html", null, true));
                echo "\">Opigno ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["opigno_lms_release"] ?? null), "html", null, true));
                echo "</span> ";
                // line 194
                echo "                ";
            } else {
                // line 195
                echo "                  <span>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("N/A")));
                echo "</span>
                ";
            }
            // line 197
            echo "              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
";
        }
        // line 205
        echo "
";
        // line 206
        if ($this->getAttribute(($context["page"] ?? null), "menu", array())) {
            // line 207
            echo "  <div id=\"menu-wrapper\" class=\"container\" role=\"complementary\">
    <div class=\"bg-faded\">
      ";
            // line 209
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "menu", array()), "html", null, true));
            echo "
      <div class=\"d-md-none\">
        <nav id=\"mobile-menu\">
          <ul>
            <li>
              <a href=\"";
            // line 214
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("search.view_node_search")));
            echo "\" class=\"search ";
            if ((($context["route_name"] ?? null) == "search.view_node_search")) {
                echo "is-active";
            }
            echo "\">
                ";
            // line 215
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Search")));
            echo "
              </a>
            </li>
            ";
            // line 218
            if (($context["logged_in"] ?? null)) {
                // line 219
                echo "              <li>
                <a href=\"";
                // line 220
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.canonical", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
                echo "\" class=\"user ";
                if ((($context["route_name"] ?? null) == "entity.user.canonical")) {
                    echo "is-active";
                }
                echo "\">
                  <span>";
                // line 221
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("User profile")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"";
                // line 225
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("entity.user.edit_form", array("user" => $this->getAttribute(($context["user"] ?? null), "id", array()))), "html", null, true));
                echo "\" class=\"administration ";
                if ((($context["route_name"] ?? null) == "entity.user.edit_form")) {
                    echo "is-active";
                }
                echo "\">
                  <span>";
                // line 226
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Settings")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"https://www.opigno.org\" target=\"_blank\" class=\"help\">
                  <span>";
                // line 231
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Help")));
                echo "</span>
                </a>
              </li>
              <li>
                <a href=\"";
                // line 235
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("user.logout")));
                echo "\" class=\"logout\">
                  <span>";
                // line 236
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Logout")));
                echo "</span>
                </a>
              </li>
            ";
            }
            // line 240
            echo "          </ul>
        </nav>
      </div>
    </div>
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "@platon/layout/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  556 => 240,  549 => 236,  545 => 235,  538 => 231,  530 => 226,  522 => 225,  515 => 221,  507 => 220,  504 => 219,  502 => 218,  496 => 215,  488 => 214,  480 => 209,  476 => 207,  474 => 206,  471 => 205,  461 => 197,  455 => 195,  452 => 194,  446 => 193,  444 => 192,  440 => 191,  434 => 188,  425 => 184,  413 => 175,  406 => 170,  404 => 169,  399 => 166,  393 => 164,  387 => 162,  385 => 161,  378 => 157,  373 => 154,  363 => 147,  358 => 146,  352 => 143,  349 => 142,  347 => 141,  342 => 139,  336 => 136,  332 => 135,  327 => 133,  323 => 132,  316 => 128,  312 => 127,  300 => 122,  296 => 121,  288 => 116,  284 => 115,  280 => 114,  273 => 110,  267 => 106,  261 => 104,  259 => 103,  254 => 101,  247 => 97,  242 => 95,  238 => 94,  234 => 93,  230 => 92,  223 => 88,  217 => 84,  211 => 82,  209 => 81,  204 => 79,  199 => 76,  195 => 74,  186 => 71,  181 => 70,  177 => 69,  174 => 68,  172 => 67,  165 => 63,  159 => 59,  153 => 57,  151 => 56,  144 => 51,  140 => 49,  131 => 46,  126 => 45,  122 => 44,  119 => 43,  117 => 42,  110 => 38,  104 => 34,  98 => 32,  96 => 31,  91 => 28,  83 => 23,  75 => 18,  66 => 11,  64 => 10,  61 => 9,  58 => 8,  52 => 5,  49 => 4,  47 => 3,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "@platon/layout/header.html.twig", "/home/piyon/o2/profiles/opigno_lms/themes/contrib/platon/templates/layout/header.html.twig");
    }
}
